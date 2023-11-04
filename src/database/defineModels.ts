import type {Sequelize} from 'sequelize'
import user from './models/user'
import supplier from './models/supplier'

export const defineModels = (sequelize: Sequelize) => {
  sequelize.define('User', user, {tableName: 'usuario'})
  sequelize.define('Supplier', supplier, {tableName: 'proveedor'})
}

export default defineModels
