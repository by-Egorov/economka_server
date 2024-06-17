import Router from 'express'
import { check } from 'express-validator'
import {
	getUser,
	login,
	register,
	updateUserData,
} from '../controllers/dataController.js'
import authMiddleware from '/opt/render/project/src/middleware/AuthMiddleware.js'


const router = new Router()

router.post(
	'/register',
	[
		check('email', 'Поле email не может быть пустым').notEmpty(),
		check(
			'password',
			'Пароль должен быть больше 4 и меньше 10 символов'
		).isLength({ min: 4, max: 10 }),
	],
	register
)
router.post(
	'/login',
	[
		check('email', 'Поле email не может быть пустым').notEmpty(),
		check(
			'password',
			'Пароль должен быть больше 4 и меньше 10 символов'
		).isLength({ min: 4, max: 10 }),
	],
	login
)

router.get('/user', authMiddleware, getUser)
router.put('/user/upd', authMiddleware, updateUserData)

// router.post('/data/price/:id', addPrice)

export default router
