import {NodeEnvs} from '@declarations/enums'
import env from '@config/envVars'
import app from './server'
import db from '@db'
import {mekeSwagger} from './swagger/mekeSwagger'

if (env.nodeEnv !== NodeEnvs.Dev)
  throw new Error('src/index.js solo se debe ejecutar el ambiende de desarrollo')

db.open()
  .then(() => {
    console.log('Base de datos conectada')
    mekeSwagger()
    app.listen(env.port, (error: void) => {
      const err: any = error
      if (err) console.error(error)
      else console.log('Server abierto en puerto: ', env.port)
    })
  })
  .catch((error) => console.error(error))
