import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	products: [
		{
			price: {
				type: Number,
			},
			date: {
				type: Date,
			},
		},
	],
	me: [
		{
			price: {
				type: Number,
			},
			date: {
				type: Date,
			},
		},
	],
	wife: [
		{
			price: {
				type: Number,
			},
			date: {
				type: Date,
			},
		},
	],
	things: [
		{
			price: {
				type: Number,
			},
			date: {
				type: Date,
			},
		},
	],
	daughter: [
		{
			price: {
				type: Number,
			},
			date: {
				type: Date,
			},
		},
	],
	car: [
		{
			price: {
				type: Number,
			},
			date: {
				type: Date,
			},
		},
	],
})

export default mongoose.model('User', UserSchema)
