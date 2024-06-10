import mongoose from 'mongoose'

const DataSchema = new mongoose.Schema({
	me: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Me',
		},
	],
	car: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Car',
		},
	],
	daughter: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Daughter',
		},
	],
	things: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Things',
		},
	],
	wife: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Wife',
		},
	],
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
})
export default mongoose.model('Data', DataSchema)
