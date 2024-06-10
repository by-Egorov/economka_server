import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Car', CarSchema)