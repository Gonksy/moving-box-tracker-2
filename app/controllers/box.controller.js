const Box = require('../models/box.model.js');
const Item = require('../models/box.model.js');

// Landing / Retrieve All
exports.findAll = (req, res) => {
  Box.find()
  .then(boxes => {
    // res.render('index.ejs', { data: boxes })
    res.send(boxes)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving boxes.'
    })
  })
};

// Create and save a new Box
exports.createBox = (req, res) => {
  // Validate request
  if(!req.body.boxName) {
    return res.status(400).send({
        message: "Box Name can not be empty"
    });
  }

  // Create a Box
  const box = new Box({
    boxName: req.body.boxName
  });

  // Save Box in the database
  box.save()
  .then(data => {
    res.redirect('/');
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating Box.'
    })
  })
}

// Create a new item and save it inside a box
exports.createItem = (req, res) => {
  // Validate request
  if(!req.body.item) {
    return res.status(400).send({
        message: "Item field can not be empty"
    });
  }

  // Create an Item
  const item = new Item({
    item: req.body.item
  });

  // Save Item in the box
  Box.findByIdAndUpdate(req.params.boxId, {
    boxItems: [item]
  }, {new: true})
  .then(box => {
    if (!box) {
      return res.status(404).send({
        message: 'Box not found with id' +req.params.boxId
      })
    }
    res.send(box)
  })
  .catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Box not found with id " + req.params.boxId
      })
    }
    return res.status(500).send({
      message: "Error updating box with id " + req.params.boxId
    })
  })
}