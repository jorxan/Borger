const orm = require('../config/orm');

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(col1, col2, val1, val2,cb){
        orm.insertOne('burgers',col1,col2,val1,val2, function(res){
            cb(res);
        });
    },
    updateOne: function(col2,col2value,col1,col1value,cb){
        orm.updateOne('burgers',col2,col2value,col1,col1value, function(res){
            cb(res);
        });
    }
}

module.exports = burger;