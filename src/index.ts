import swaggerUi from 'swagger-ui-express'
import {NodeEnvs} from '@declarations/enums'
import env from '@config/envVars'
import app from './server'
import db from '@db'
import {mekeDocs} from './swagger'
import {actions} from '@api'

if (env.nodeEnv !== NodeEnvs.Dev)
  throw new Error('src/index.js solo se debe ejecutar el ambiende de desarrollo')

db.open()
  .then(() => {
    console.log('Base de datos conectada')
    const swaggerObject = mekeDocs(db.getModels(), actions)
    app.use('/docs-dev', swaggerUi.serve, swaggerUi.setup(swaggerObject))
    app.listen(env.port, (error: void) => {
      const err: any = error
      if (err) console.error(error)
      else console.log('Server abierto en puerto: ', env.port)
    })
  })
  .catch((error) => console.error(error))
