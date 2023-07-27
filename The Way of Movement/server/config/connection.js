const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided URI or a default local URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MovementWay', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the mongoose connection instance to be used elsewhere in the application
module.exports = mongoose.connection;