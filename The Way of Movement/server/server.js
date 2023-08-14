// Import required modules and libraries
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// Import GraphQL schema and database connection
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Set the port for the server to listen on, default to 3001
const PORT = process.env.PORT || 3001;

// Create an Express app
const app = express();

// Create an instance of ApolloServer with the provided GraphQL schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Add authentication middleware to the context
});

// Configure Express app to use JSON and URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set CORS headers to allow requests from the frontend client
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Add the allowed methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add any custom headers used in requests
  next();
});

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, '../client/images')));

// If in production environment, serve static files from the "build" directory
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Route to serve the index.html file from the "build" directory for all requests to the root path ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Function to start the ApolloServer, apply middleware, and start the Express server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start(); // Start the ApolloServer
  server.applyMiddleware({ app }); // Apply Apollo middleware to the Express app
  
  // Once the database connection is open, start the Express server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the startApolloServer function with the provided schema and resolvers
startApolloServer(typeDefs, resolvers);