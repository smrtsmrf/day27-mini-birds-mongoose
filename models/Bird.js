var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var birdSchema = new Schema({

	name: {
		type: String,
		lowercase: true,
		required: true
	},
	order: {
		type: String,
		maxlength: 20, 
		lowercase: true
	},
	status: {
		type: String,
		lowercase: true,
		enum: [
			'extinct',
		      'extinct in the wild',
		      'critically endangered',
		      'endangered',
		      'vulnerable',
		      'near threatened',
		      'conservation dependent',
		      'least concern'
		      ],
		lowercase: true
	}
})

module.exports = birdSchema