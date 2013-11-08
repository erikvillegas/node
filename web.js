var mongo = require('mongodb');
var express = require("express");
var app = express();
app.use(express.logger());

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://erik:database3@ds053638.mongolab.com:53638/heroku_app19288256';

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
    collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
    });
  });
});