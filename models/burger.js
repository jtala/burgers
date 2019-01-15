var orm = require("../config/orm.js");

var burger ={
    selectall: function(cb) {
        orm.selectall("burgers", function(res) {
          cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },

    updateOne: function(objColValues, condition, cb) {
      orm.updateOne("burgers", objColValues, condition, function(res) {
      cb(res);
    });
  },


};

// ------------------------------- EXPORTS TO burgers_controller.js -----------------------
module.exports = burger;