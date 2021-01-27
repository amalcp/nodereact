var express = require('express');
var db = require('../config/mongoConnection');
var router = express.Router();
var emailValidator = require('email-validator');
var uniqid = require('uniqid');
var ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

const hashPasswordAsync = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  /*
   * Instead of logging on the console
   * you can store the password on the DB
   */
  //console.log(hash);
};

//api for check Admin Stat
router.post('/getReport', function (req, res, next) {
  const database = db.getDatabase();

  let data = {
    FullName: req.body.FullName,
    Username: req.body.Username,
    Emil: req.body.Emil,
    Birthdate: req.body.Birthdate,
    password: hashPasswordAsync(req.body.password),
  };

  var process = database.collection('TestUsers').insertOne(data);
  res.send('SUCCESS');
});

//api for check Admin Stat
router.get('/getTablecontent', function (req, res, next) {
  const database = db.getDatabase();

  var process = database
    .collection('TestUsers')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

//api for check Admin Stat
router.post('/deleteRow', function (req, res, next) {
  const database = db.getDatabase();
  var data = req.body;
  console.log(data);
  let id = ObjectId(data.id);
  let newreq = { _id: id };
  var process = database
    .collection('TestUsers')
    .deleteOne(newreq, function (err, obj) {
      if (err) throw err;
      console.log('1 document deleted');
    });
  res.send('SUCCESS');
});

module.exports = router;
