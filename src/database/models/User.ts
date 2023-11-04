import {DataTypes} from 'sequelize'

export default {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
    comment: 'identificador universal unico para la tabal usuario'
  },
  primerNombre: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Primer nombre del usuario'
  },

  sub: {
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,
    comment: 'Id de usuario de Cognito aws'
  }
}
