import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// main imports
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './layout';

// user imports
import Login from './components/login';
import Signup from './components/signup';
import Logout from './pages/Sign-in-up-out';

// blog imports
import Blog from './pages/Blog';
import ManagePosts from './pages/ManagePosts';

// store imports
import Store from './pages/Store';
import ProductList from './components/ProductList';

// in construction imports
import Workshop from './pages/Workshop';
import Coaching from './pages/Online-Coaching';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <div>
            <Routes>
              {/* main links */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              {/* user links */}
              <Route path="/login" element ={<Login />} />
              <Route path="/signup" element ={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              {/* blog links */}
              <Route path="/blog/:_id" element={<Blog />} />
              <Route path="/managePosts" element={<ManagePosts />} />
              {/* store links */}
              <Route path="/store" element={<Store />} />
              <Route path="/store/:categoryId" element={<ProductList />} />
              {/* <Route path="/products" element={<ProductList />} /> */}
              {/* in construction links */}
              <Route path="/workshop" element={<Workshop />} />
              <Route path="/online-coaching" element={<Coaching />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
