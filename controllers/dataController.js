import Data from '../models/Data.js'
import Product from '../models/Product.js'

export const getData = async (req, res) => {
	try {
		const data = await Data.findById(req.query.id)
		return res.json({ data })
	} catch (error) {
		console.warn(error)
		res.status(400).json({
			message: 'Get Data error',
		})
	}
}

export const addProd = async (req, res) => {
	const { id } = req.params
	const { value } = req.body
	try {
		const data = await Data.findById(id)

		if (!data) {
			return res.status(400).json({ message: 'Data not found' })
		}
		data.products.push(value)
		await data.save()
		res.status(200).json({ message: 'Product added successfully', data })
	} catch (error) {
		console.warn(error)
		res.status(500).json({
			message: 'Ошибка добавления',
		})
	}
}
