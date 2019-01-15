// Import the database connection
var connection = require("./connection.js");

// ------------------------------- TRANSLATORS TO MYSQL FUNCTIONS -----------------------
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// ------------------------------- ORM  -----------------------

var orm = {
    selectall: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function (table, col, vals, cb){
      var queryString = "INSERT INTO "+ table;
      // MIMICS INSERT into ? VALUES ?, ?, ?
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }  
            cb(result);
          });
    },

    updateOne: function(table, cols, condition, cb) {
      var queryString = "UPDATE " + table;

      // Mimics SQL: UPDATE ? SET ? WHERE ?;
      queryString += " SET ";
      queryString += objToSql(cols);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },


};



// -------------------------------EXPORTS TO BURGERS.JS -----------------------
module.exports = orm;