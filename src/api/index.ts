import {Router} from 'express'
import type {Request, Response, NextFunction} from 'express'
import StatusCodes from '@config/statusCodes'
import db from '@db'
import type {Model, ModelStatic} from 'sequelize'

enum Methods {
  get = 'GET',
  post = 'POST',
  put = 'PUT'
}

export interface Action {
  path: string
  method: Methods
  controller: Function
  //(Model: ModelStatic<Model<any, any>>, data?: any) => Promise<Model<any, any>[] | Model<any, any>>
  exclude?: string[]
}

interface Actions {
  [name: string]: Action
}

export const routes = Router()

export const actions: Actions = {
  all: {
    path: '/all',
    method: Methods.get,
    controller: (Model: ModelStatic<Model>) => Model.findAll(),
    exclude: []
  },
  add: {
    path: '/add',
    method: Methods.post,
    controller: (Model: ModelStatic<Model>, data: Model) => Model.create({...data}),
    exclude: []
  }
}

const assignController = async (req: Request, res: Response, next: NextFunction) => {
  const {modelName, action} = req.params
  const {controller, method} = actions[action]
  if (!controller) return next()
  if (req.method !== method) return next()
  const Model = db.getModels()[modelName]
  if (!Model) return next()
  const result = await controller(Model, req.body, req.params, req.query)
  return res.status(StatusCodes.OK).json(result)
}

// **** Setup routes **** //

routes.use('/:modelName/:action', assignController)

export default routes
