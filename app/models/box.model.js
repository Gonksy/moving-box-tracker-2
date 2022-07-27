const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  item: String
}, {
  timestamps: true
});

const BoxSchema = mongoose.Schema({
  boxName: String,
  items: [ItemSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Box', BoxSchema);
module.exports = mongoose.model('Item', ItemSchema);