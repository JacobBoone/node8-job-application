var mongoose =require('mongoose');

var Candidate = mongoose.model('Candidate', {
	// _id: mongoose.Schema.Types.ObjectId,
	name: String,
	bio: String, 
	skills: String,
	years: String,
	why: String

})


module.exports = Candidate;