const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  item: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);
