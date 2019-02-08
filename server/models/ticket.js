const mongoose = require('mongoose')
// const Flight = require('./flights')

const TicketSchema = mongoose.Schema({
		_id: mongoose.Types.ObjectId,
		flightId: mongoose.Types.ObjectId,
		fromDest: {
			type: String
			},
		flightName: String,
		toDest: {
			type: String
		},
    dateOfRes: {
      type: Date,
      default: Date.now,
    },
    dateOfExp: {
      type: Date,
      default: Date.now() + 1000*60*60*24*2
		},
		flightStartDate: Date,
		flightEndDate: Date,
		middleDest: [String],
		owner: {
			type: mongoose.Types.ObjectId,
			ref: 'userdata'
		}
})

const TicketData = mongoose.model('Ticket', TicketSchema)

// TicketSchema.post('remove', function(next) {
// 	// Remove all the assignment docs that reference the removed person.
// 	this.model('flightdata').remove({ tickets: this._id }, next);
// });

module.exports = {
    TicketSchema,
    TicketData
}