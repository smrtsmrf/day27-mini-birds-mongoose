var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Sighting = require('./models/Sighting')

var app = express();
app.use(bodyParser.json());

var port = 3000;

mongoose.connect('mongodb://localhost:27017/mini-birds-mongoose')

app.post('/api/sighting', function(req, res) {
  var newSighting = new Sighting(req.body);
  newSighting.save(function (err, result) {
  	err ? res.status(500).send(err) : res.send(result)
  })
});
 
app.get('/api/sighting', function(req, res) {
	Sighting.find(req.query, function (err, result) {
	  	err ? res.status(500).send(err) : res.send(result)
	})
});
 
app.delete('/api/sighting', function(req, res) {
	Sighting.findByIdAndRemove(req.query.id, function (err, result) {
		err ? res.status(500).send(err) : res.send(result)
	})
});
 
app.put('/api/sighting', function(req, res) {
	Sighting.findByIdAndUpdate(req.query.id, {$set: {order: req.body.order}}, function(err, result) {
		err ? res.status(500).send(err) : res.send(result)
	})
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
