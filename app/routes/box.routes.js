module.exports = (app) => {
  const boxes = require('../controllers/box.controller.js');

  // Landing / Retrieve all boxes
  app.get('/', boxes.findAll);

  
  
  // Create a new box
  app.post('/boxes', boxes.createBox);

  // // Delete a box with boxId
  // app.delete('/boxes/:boxId', boxes.deleteBox);

  // // Rename a box with boxId
  // app.put('/boxes/:boxId', boxes.updateBox);



  // Create a new item
  app.put('/boxes/:boxId/', boxes.createItem);

  // Delete an item with itemId
  // app.delete('/boxes/:boxId/:itemId', boxes.deleteItem);

  // // Edit an item with itemId
  // app.put('/boxes/:boxId/:itemId', boxes.updateItem);
}