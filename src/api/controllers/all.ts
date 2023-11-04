import type { Model, ModelStatic } from 'sequelize'

export const all = async (Model: ModelStatic<Model<any, any>>) => {
    return await Model.findAll()
}

export default all