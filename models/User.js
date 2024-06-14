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
		data: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Data'
		}
	}
)

export default mongoose.model('User', UserSchema)