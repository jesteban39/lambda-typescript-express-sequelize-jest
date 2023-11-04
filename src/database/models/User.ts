import { DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

export const defineUser = (sequelize: Sequelize) => {

  return sequelize.define('User',
    {
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
      },
  
    },
    {
      tableName: 'usuario',
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  )
}

export default defineUser