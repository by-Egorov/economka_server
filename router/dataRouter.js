import Router from 'express'
import { addProd, getData } from '../controllers/dataController.js'

const router = new Router()

router.get('/data', getData)

router.post('/data/:id/prod', addProd)

export default router