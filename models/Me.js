import mongoose from 'mongoose'

const MeSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Me', MeSchema)