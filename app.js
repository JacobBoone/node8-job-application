var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Candidate =require('./models/candidates.js')

mongoose.connect('mongodb://localhost/omega3studios');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	Candidate.find({}, function(err, data){
		res.render('applicants', {applicants: data})

	})
	
});

// creates and applicant
app.post('/applicant', function(req, res){
	console.log(req.body)

	var candidate = new Candidate({
		name: req.body.name,
		bio: req.body.bio, 
		skills: req.body.skills,
		years: req.body.years,
		why: req.body.why
	});

	candidate.save()

	// Here is where you need to get the data
	// from the post body and store it in the database
	res.render('./submitted');
	// res.render('candidate', );
	});


var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
