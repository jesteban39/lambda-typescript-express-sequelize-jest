import { Router } from 'express'
//import validate from './middlware/validate'
import userRoutes from './user-routes'

// **** Init **** //

const apiRouter = Router()

// **** Setup user routes **** //

// Get all users
apiRouter.use('/User', userRoutes)

// // Add one user
// userRouter.post(
//   userRoutes.paths.add,
//   validate(['user', User.instanceOf]),
//   userRoutes.add,
// )

// // Update one user
// userRouter.put(
//   userRoutes.paths.update,
//   validate(['user', User.instanceOf]),
//   userRoutes.update,
// )

// // Delete one user
// userRouter.delete(
//   userRoutes.paths.delete,
//   validate(['id', 'number', 'params']),
//   userRoutes.delete,
// )

// // Add userRouter
// apiRouter.use(userRoutes.paths.basePath, userRouter)

// **** Export default **** //

export default apiRouter
