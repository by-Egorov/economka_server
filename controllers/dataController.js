import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'
import Data from '../models/Data.js'
import User from '../models/User.js'

const generateAccessToken = id => {
	const payload = {
		id,
	}
	return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' })
}
//Register
export const register = async (req, res) => {
	try {
		const { email, password, data } = req.body

		// Проверка существования пользователя
		const existingUser = await User.findOne({ email })
		if (existingUser) {
			return res
				.status(409)
				.json({ message: 'Пользователь с таким email уже существует' })
		}
		const userDataI = new Data(data)
		await userDataI.save()

		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ message: 'Ошибка при регистрации', errors })
		}

		const salt = await bcrypt.genSalt(7)
		const hash = await bcrypt.hash(password, salt)

		const doc = new User({
			email,
			passwordHash: hash,
			data: userDataI._id,
		})
		const user = await doc.save()
		const { passwordHash, ...userData } = user._doc
		res.json({
			...userData,
		})
	} catch (e) {
		console.warn(e)
		res.status(400).json({
			message: 'Registration error',
		})
	}
}
//Login
export const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			return res
				.status(400)
				.json({ message: 'Пользователь с таким email не найден' })
		}
		if (user.email !== req.body.email) {
			return res
				.status(409)
				.json({ message: 'Не верные данные, повторите ввод' })
		}
		const isValidPass = await bcrypt.compare(
			req.body.password,
			user._doc.passwordHash
		)
		if (!isValidPass) {
			return res.status(401).json({ message: 'Введен неверный пароль' })
		}
		const token = generateAccessToken(user._id, user.roles)
		const { passwordHash, ...userData } = user._doc
		res.json({
			...userData,
			token,
		})
		// return res.json({ token })
	} catch (e) {
		console.warn(e)
		res.status(400).json({
			message: 'Login error',
		})
	}
}
//getUser
export const getUser = async (req, res) => {
	try {
		if (!req.user || !req.user.id) {
			return res.status(401).json({ error: 'Пользователь не авторизован' })
		}

		const userId = req.user.id
		const user = await User.findById(userId)
		return res.json(user)
	} catch (error) {
		console.warn(error)
		res.status(401).json({ error: 'Пользователь не авторизован' })
	}
}
//Update User
export const updateUserData = async (req, res) => {
	const userId = req.user.id
	const { arrayName, price } = req.body
	try {
		let updateObject = {}

		switch (arrayName) {
			case 'products':
			case 'me':
			case 'wife':
			case 'car':
			case 'things':
			case 'wife':
				updateObject = { $addToSet: { [arrayName]: { price } } }
				break
			default:
				return res.status(400).json({ error: 'Некорректный тип массива' })
		}
		const user = await User.findByIdAndUpdate(userId, updateObject, {
			new: true,
		})
		res.json(user, {
			message: 'Done!'
		})
	} catch (error) {
		console.error('Ошибка при обновлении данных пользователя:', error)
		res.status(500).json({ error: 'Ошибка при обновлении данных пользователя' })
	}
}

//getData

//addPrice
