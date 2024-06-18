import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dataRouter from './dataRouter.js'

const PORT = process.env.PORT
const db = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const server = express()

mongoose
	.connect(
		`mongodb+srv://${user}:${password}@cluster0.5qqffmc.mongodb.net/${db}?retryWrites=true&w=majority`
	)
	.then(() => console.log('DB ok'))
	.catch(() => console.log('DB error'))

server.use(express.json())
server.use(cors())
server.use(express.json())
server.use('/api', dataRouter)


server.listen(PORT, () => {
	console.log(`Server is OK, port=${PORT}`)
})
