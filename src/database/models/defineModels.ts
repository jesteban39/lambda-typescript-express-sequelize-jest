import type { Sequelize } from 'sequelize'

import defineUser from './User.js'
import defineSupplier from './Supplier.js'

export const defineModels = (sequelize: Sequelize) => {

    const User = defineUser(sequelize)
    const Supplier = defineSupplier(sequelize)

    /* ~~~~~~~ Relaciones entre tablas ~~~~~~~ */

}

export default defineModels