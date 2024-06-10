import mongoose from 'mongoose'

const DaughterSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Daughter', DaughterSchema)