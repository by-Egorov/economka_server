import jwt from 'jsonwebtoken'

function AuthMiddleware(req, res, next) {
	if (req.method === 'OPTIONS') {
		return next()
	}

	try {
		const authorizationHeader = req.headers.authorization

		if (!authorizationHeader) {
			return res.status(403).json({ message: 'Пользователь не авторизован' })
		}
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			return res.status(403).json({ message: 'Пользователь не авторизован' })
		}
		console.log('Token:', token)
		console.log('Secret Key:', process.env.SECRET_KEY)

		const decodedData = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decodedData
		console.log(req.user)
		next()
	} catch (e) {
		console.log(e)
		return res.status(403).json({ message: 'Пользователь не авторизован' })
	}
}

export default AuthMiddleware
