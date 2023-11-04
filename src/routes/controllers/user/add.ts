import type {Request, Response} from 'express'
import type {User} from '@appTypes/User'
import statusCodes from '@config/statusCodes'
import db from '@db'

interface ReqUser extends Request {
  body: User
}

export const add = async (req: ReqUser, res: Response) => {
  const {User} = db.getModels()
  const newUser = await User.create(req.body)
  return res.status(statusCodes.OK).json(newUser)
}

export default add
