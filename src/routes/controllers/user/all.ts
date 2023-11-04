import statusCodes from '@config/statusCodes'
import db from '@db'
import type {Request, Response} from 'express'

export const all = async (_req: Request, res: Response) => {
  const {User} = db.getModels()
  const allUsers = await User.findAll()
  return res.status(statusCodes.OK).json(allUsers)
}

export default all
