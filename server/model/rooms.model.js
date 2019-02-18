const dbObj = require('../../src/db.json');
// const fs = require('fs');
// const db = JSON.parse(fs.readFileSync, `${dbObj}`, 'utf8');


function getRoomList() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dbObj.db.roomsTable)
      }, 300);
    });
};
const roomsModel = {
  getRoomList,
}

module.exports = roomsModel;