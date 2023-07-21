const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Post, Section } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    sections: async () => {
      return await Section.find();
    },
    getPosts: async (_, { title }) => {
      try {
        // If the 'title' argument is provided, fetch posts for that specific title
        if (title) {
          const post = await Post.findOne({ page: title }).populate('sections');
          post._id = post._id.toString();
          return post ? [post] : [];
        }

        // If 'title' is not provided, fetch all posts
        const posts = await Post.find();
        return posts;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch blogs by page.');
      }
    },
    // getPosts: async (_, { title }) => {
    //   try {
    //     let posts;
    
    //     // If the 'title' argument is provided, fetch posts for that specific title
    //     if (title) {
    //       posts = await Post.find({ page: title }).populate('sections');
    //     } else {
    //       // If 'title' is not provided, fetch all posts
    //       posts = await Post.find();
    //     }
    
    //     return posts.map((post) => ({
    //       ...post._doc,
    //       sections: post.sections.map((section) => ({
    //         ...section._doc,
    //         id: section._id.toString(), // Convert section _id to string
    //       })),
    //       id: post._id.toString(), // Convert post _id to string
    //     }));
    //   } catch (error) {
    //     console.error(error);
    //     throw new Error('Failed to fetch blogs by page.');
    //   }
    // },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'aud',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // in production environment, will need updateProductDetails (for admin only)
    updateProductQuantity: async (parent, { _id, quantity }) => {
      try {
        const product = await Product.findByIdAndUpdate(
          _id,
          { $inc: { quantity: -Math.abs(quantity) } },
          { new: true }
        );
    
        if (!product) {
          throw new Error('Product not found.');
        }
    
        return product;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update product.');
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
