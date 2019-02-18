const roomsModel = require('../model/rooms.model');

function addRoom(ctx) {
  //here logic for routing to model,
  //since I don't need to add to db I won't
};

function getRooms(ctx) {

    return roomsModel
    .getRoomList()
    .then(data => {
      ctx.status = 200;
      ctx.response.body = data
    })
    .catch(e => {
      console.log(e);
      ctx.status = 500;
      ctx.response.body = 'There was an error with the request'
    });

}

const roomsController = {
  addRoom,
  getRooms,
}
module.exports = roomsController;