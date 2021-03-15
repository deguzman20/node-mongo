const mongoose = require('mongoose');

const quote = new mongoose.Schema({
  name: {
    type: String
  },
  quote: {
    type: String
  }
});

module.exports = Quote = mongoose.model('Quote', quote);