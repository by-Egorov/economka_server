import mongoose from 'mongoose'

const DataSchema = new mongoose.Schema({
	me: [
		{
			type: Number,
		},
	],
	car: [
		{
			type: Number,
		},
	],
	daughter: [
		{
			type: Number,
		},
	],
	things: [
		{
			type: Number,
		},
	],
	wife: [
		{
			type: Number,
		},
	],
	products: [
		{
			type: Number,
		},
	],
})
export default mongoose.model('Data', DataSchema)
