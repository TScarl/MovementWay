const mongoose = require('mongoose');
const { Schema } = mongoose;

const sectionSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;