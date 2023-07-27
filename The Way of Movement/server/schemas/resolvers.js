const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // Resolver to fetch all categories
    categories: async () => {
      return await Category.find();
    },

    // Resolver to fetch posts with optional filtering by _id
    getPosts: async (_, { _id }) => {
      try {
        // If the 'title' argument is provided, fetch posts for that specific title
        if (_id) {
          const post = await Post.findOne({ _id });
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

    // Resolver to fetch products with optional filtering by category and name
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

    // Resolver to fetch a single product by _id
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },

    // Resolver to fetch a user with their orders and products
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

    // Resolver to fetch a specific order by _id for the authenticated user
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

    // Resolver to handle the checkout process using Stripe
    checkout: async (parent, args, context) => {
      // ... Implementation to handle checkout using Stripe ...
    }
  },

  Mutation: {
    // Resolver to add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // Resolver to add a new order for the authenticated user
    addOrder: async (parent, { products }, context) => {
      // ... Implementation to add a new order for the authenticated user ...
    },

    // Resolver to update the user profile for the authenticated user
    updateUser: async (parent, args, context) => {
      // ... Implementation to update the user profile for the authenticated user ...
    },

    // Resolver to update the product quantity (for admin only)
    updateProductQuantity: async (parent, { _id, quantity }) => {
      try {
        // ... Implementation to update the product quantity ...
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update product.');
      }
    },

    // Resolver to handle user login and generate JWT token
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