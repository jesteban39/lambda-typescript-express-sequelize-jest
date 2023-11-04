import 'express-async-errors'
import express, {Request, Response, NextFunction} from 'express'
import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import logger from 'jet-logger'
import helmet from 'helmet'
import fs from 'fs'

import api from './api'
import envVars from '@config/envVars'
import StatusCodes from '@config/statusCodes'
import {NodeEnvs} from '@declarations/enums'
import {RouteError} from '@declarations/classes'

// **** Init express **** //

// deepcode ignore UseCsurfForExpress: <se usa jwt en su lugar>
const app = express()

// **** Set basic express settings **** //

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// swager
const swaggerJson = fs.readFileSync('./src/swagger/swagger.json', 'utf8')
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerJson)))

// Show routes called in console during development
if (envVars.nodeEnv === NodeEnvs.Dev) {
  app.use(morgan('dev'))
}

// Security
if (envVars.nodeEnv === NodeEnvs.Prd) {
  app.use(helmet())
}

// Add APIs
app.use('/api', api)

// Setup error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.err(err, true)
  let status = StatusCodes.BAD_REQUEST
  if (err instanceof RouteError) {
    status = err.status
  }
  return res.status(status).json({error: err.message})
})

export default app
