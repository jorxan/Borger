const express = require('express')
const burger = require('../models/burger');
const router = express.Router();

router.get('/', function(req,res){
    burger.selectAll(function(data){
        const theBurger = {
            burger: data
        };
        console.log(theBurger);
        res.render('index',theBurger);
    });
});

router.post('/api/burgers', function(req, res){
    burger.insertOne(['burger_name','devoured'],[req.body.burger_name, false], function(result){
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
        console.log(result);
    });
});

router.put('/api/burgers:id', function(req,res){
    const condition = req.params.id
    burger.updateOne('devoured', req.body.devoured, "id", condition, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    
    });
});

module.exports = router;