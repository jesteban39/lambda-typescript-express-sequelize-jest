import { Router } from 'express'
import all from '@controllers/user/all'
import add from '@controllers/user/add'
import { paths } from './paths'

export const userRout = Router()

userRout.get(paths.all, all)
userRout.post(paths.add, add)

export default userRout
