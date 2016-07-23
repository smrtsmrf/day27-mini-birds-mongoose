var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sightingSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		required: true
	},
	order: {
		type: String,
		maxlength: 20
	},
	status: {
		type: String,
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
	},
	confirmed: {
		type: Boolean,
		default: false
	},
	numberSeen: {
		type: Number,
		min: 1
	}
})

module.exports = mongoose.model('Sighting', sightingSchema)