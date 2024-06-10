import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Product', ProductSchema)