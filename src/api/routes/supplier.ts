import {Router} from 'express'
import type {Request, Response} from 'express'
import {PkNotMache} from '@declarations/errors'
import {getModels} from '@db'

export const router = Router()

router.get('/', async (_req: Request, res: Response) => {
  const {Supplier} = getModels()
  const suppliers = await Supplier.findAll()
  return res.status(200).json(suppliers)
})

router.get('/:id', async (req: Request, res: Response) => {
  const {Supplier} = getModels()
  const {id} = req.params
  const supplier = await Supplier.findByPk(id)
  if (!supplier) throw new PkNotMache(id)
  return res.status(200).json(supplier)
})

router.post('/', async (req: Request, res: Response) => {
  const {Supplier} = getModels()
  const supplier = await Supplier.create(req.body)
  return res.status(200).json(supplier)
})

router.put('/:id', async (req: Request, res: Response) => {
  const {Supplier} = getModels()
  const {id} = req.params
  const supplier = await Supplier.findByPk(id)
  if (!supplier) throw new PkNotMache(id)
  const newSupplier = await supplier.update({...req.body})
  return res.status(200).json(newSupplier)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const {Supplier} = getModels()
  const {id} = req.params
  const supplier = await Supplier.findByPk(parseInt(id))
  if (!supplier) throw new PkNotMache(id)
  const newSupplier = await supplier.destroy()
  return res.status(200).json(newSupplier)
})

export default router
