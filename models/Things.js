import mongoose from 'mongoose'

const ThingsSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Things', ThingsSchema)