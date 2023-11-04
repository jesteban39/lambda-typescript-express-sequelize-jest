import {Router} from 'express'
import type {Request, Response} from 'express'
import {PkNotMache} from '@declarations/errors'
import {getModels} from '@db'

export const router = Router()

router.get('/', async (_req: Request, res: Response) => {
  const {User} = getModels()
  const users = await User.findAll()
  return res.status(200).json(users)
})

router.get('/:id', async (req: Request, res: Response) => {
  const {User} = getModels()
  const {id} = req.params
  const user = await User.findByPk(id)
  if (!user) throw new PkNotMache(id)
  return res.status(200).json(user)
})

router.post('/', async (req: Request, res: Response) => {
  const {User} = getModels()
  const user = await User.create(req.body)
  return res.status(200).json(user)
})

router.put('/:id', async (req: Request, res: Response) => {
  const {User} = getModels()
  const {id} = req.params
  const user = await User.findByPk(id)
  if (!user) throw new PkNotMache(id)
  const newUser = await user.update({...req.body})
  return res.status(200).json(newUser)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const {User} = getModels()
  const {id} = req.params
  const user = await User.findByPk(parseInt(id))
  if (!user) throw new PkNotMache(id)
  const newUser = await user.destroy()
  return res.status(200).json(newUser)
})

export default router
