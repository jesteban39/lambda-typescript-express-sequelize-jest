import {Router} from 'express'
import userRoutes from './routes/user'
import supplierRoutes from './routes/supplier'

export const router = Router()

router.use('/User', userRoutes)
router.use('/Supplier', supplierRoutes)

export default router
