import yaml from 'js-yaml'
import fs from 'fs'
import {getSchemas} from './getSchemas'
import envVals from '@config/envVars'

export const mekeSwagger = () => {
  if (envVals.nodeEnv !== 'development')
    throw new Error('Solo se puede contruir swagger en ambiente de desarrollo')

  const swaggerObject = {
    openapi: '3.0.0',
    info: {
      title: 'lambda-typescript-express-sequelize-jest',
      description: 'ducumentacion de lambda-typescript-express-sequelize-jest',
      version: '1.0.0',
      servers: [`http://localhost:4000`]
    },
    paths: '',
    components: {
      parameters: '',
      definitions: '',
      schemas: getSchemas(),
      tags: ''
    }
  }

  fs.writeFileSync('./src/swagger/swagger.yml', yaml.dump(swaggerObject), 'utf8')
  fs.writeFileSync('./src/swagger/swagger.json', JSON.stringify(swaggerObject), 'utf8')
}
