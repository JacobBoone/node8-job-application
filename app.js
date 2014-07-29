var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/omega3studios');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
});
// creates and applicant
app.post('/applicant', function(req, res){
	console.log(req.body)
	// Here is where you need to get the data
	// from the post body and store it in the database
	res.render('./submitted');
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
