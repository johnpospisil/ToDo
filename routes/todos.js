var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res) {
    db.Todo.find()
    .then
    .catch(function(err){
        res.send(err);
    })
});



module.exports = router;