const jwt = require('jsonwebtoken');

// Secret key for JWT (change this to a more secure value in production)
const secret = 'mysecretsshhhhh';

// Expiration time for JWT tokens (e.g., '2h' means 2 hours)
const expiration = '2h';

module.exports = {
  // Middleware function to handle authentication using JWT
  authMiddleware: function ({ req }) {
    // Extract the token from the request body, query string, or authorization header
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If the token is provided in the authorization header, remove the "Bearer" prefix
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token is found, simply return the request object as is
    if (!token) {
      return req;
    }

    try {
      // Verify the token using the secret key and set the user data in the request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      // If the token is invalid or expired, log an error message
      console.log('Invalid token');
    }

    // Return the modified request object with the user data (if available)
    return req;
  },

  // Function to sign a new JWT token with provided user data (e.g., firstName, email, _id)
  signToken: function ({ firstName, email, _id }) {
    // Create a payload containing user data to be stored in the token
    const payload = { firstName, email, _id };

    // Generate and sign the JWT token with the payload and the secret key
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};