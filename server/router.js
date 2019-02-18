const Router = require('koa-router');
const router = new Router();
const roomsController = require('./controllers/rooms.controller');

router
  .get('/rooms', roomsController.getRooms)
  .post('/rooms', roomsController.addRoom);

module.exports = router;