import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		passwordHash: {
			type: String,
			required: true
		},
		products: [
			{
				price: {
					type: Number
				}
			}
		],
		me: [
			{
				price: {
					type: Number
				}
			}
		],
		wife: [
			{
				price: {
					type: Number
				}
			}
		],
		things: [
			{
				price: {
					type: Number
				}
			}
		],
		daughter: [
			{
				price: {
					type: Number
				}
			}
		],
		car: [
			{
				price: {
					type: Number
				}
			}
		],
	}
)

export default mongoose.model('User', UserSchema)