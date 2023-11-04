import db from '@db'

const mekeProperties = (modelName: string) => {
  const Model = db.getModels()[modelName]

  const atributes = Model.getAttributes()

  return Object.keys(atributes).reduce((properties: any, key: string) => {
    const atribute = atributes[key]
    properties[key] = {
      type: 'string',
      required: !atribute.allowNull,
      description: atribute.comment,
      example: '3973'
    }
    return properties
  }, {})
}

export const getSchemas = () => {
  const models = Object.keys(db.getModels())
  return models.reduce((schemas: any, model) => {
    schemas[model] = {properties: mekeProperties(model)}
    return schemas
  }, {})
}
