import yaml from 'js-yaml'
import fs from 'fs'
import { mekeSchemas } from './mekeSchemas'
import { mekeDefinitions } from './mekeDefinitions'
import { meakeRoutes } from './mekeRoutes'
import type { ModelStatic, Model } from 'sequelize'
import type { Action } from '@api'

export const mekeDocs = (Models: { [key: string]: ModelStatic<Model<any, any>> }, actions: { [name: string]: Action }) => {

    const swaggerObject = {
        openapi: '3.0.0',
        info: {
            title: 'lambda-typescript-express-sequelizeipt',
            description: 'ducumentacion de la api tablero de incidentes',
            version: '1.0.0',
            servers: [`http://localhost:4000`]
        },
        paths: meakeRoutes(Models, actions),
        components: {
            parameters: '',
            definitions: mekeDefinitions(Models),
            schemas: mekeSchemas(Models),
            tags: ''
        }
    }

    fs.writeFileSync('./src/swagger/swagger.yml', yaml.dump(swaggerObject), 'utf8')
    fs.writeFileSync('./src/swagger/swagger.json', JSON.stringify(swaggerObject), 'utf8')

    return swaggerObject
}