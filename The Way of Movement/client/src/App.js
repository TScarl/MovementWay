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

// blog imports
import Movement101 from './pages/Blog/Movement101/Movement101';
import MovementNutrition from './pages/Blog/MovementNutrition/MovementNutrition';
// store imports
import Store from './pages/Store';

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
            {/* <StoreProvider> */}
            <Routes>
              {/* main links */}
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />}
              />
              {/* blog links */}
              <Route path="/blog" element={<Movement101 />} />
              <Route path="/blog/Movement101" element={<Movement101 />} />
              <Route path="/blog/MovementNutrition" element={<MovementNutrition />} />
              <Route path="/Store" element={<Store />} />
              {/* in construction links */}
              <Route path="/Workshop" element={<Workshop />} />
              <Route path="/Online-Coaching" element={<Coaching />} />
            </Routes>
            {/* </StoreProvider> */}
          </div>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
