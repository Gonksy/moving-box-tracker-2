module.exports = (app) => {
  const boxes = require('../controllers/box.controller.js');

  // Landing / Retrieve all boxes
  app.get('/', boxes.findAll);

  
  
  // Create a new box
  app.post('/boxes', boxes.create);

  // Delete a box with boxId
  app.delete('/boxes/:boxId', boxes.deleteOne);

  // Rename a box with boxId
  app.put('/boxes/:boxId', boxes.update)



  // Create a new item
  app.post('/boxes/:boxId/items', items.create)

  // Delete an item with itemId
  app.delete('/boxes/:boxId/:itemId', items.deleteOne)

  // Edit an item with itemId
  app.put('/boxes/:boxId/:itemId', items.update)
}