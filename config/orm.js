const connection = require('./connection.js.js');

const orm = {

    selectAll: function(tableInput,cb) {  
        connection.query("SELECT * FROM ??", [tableInput], function(err, result) {
            if(err) {throw err};

            cb(result);
        });
    },
    insertOne: function(tablename, col1, col2, val1, val2,cb) {
        const insert = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(insert, [tablename, col1,col2, val1,val2],
        function (err, result){
            if (err){throw err};

            cb(result);
        });
    },
    updateOne: function(tablename,col2,col2value,col1,col1value,cb){
        const update = "UPDATE ?? SET ?? = ? WHERE ??=?";
        connection.query(updates, {tablename, col2, col2value, col1, col1value}, function(err, result){
            if (err) {throw err};
            cb(result);
        })
    }
};

module.exports = orm;