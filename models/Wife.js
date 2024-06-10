import mongoose from 'mongoose'

const WifeSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Wife', WifeSchema)