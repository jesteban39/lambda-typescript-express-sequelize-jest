import {DataTypes} from 'sequelize'

export default {
  uuid: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true,
    comment: 'identificador universal unico para la tabal proveedor'
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'descripcion del proveedor'
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nombre de empresa del proveedor'
  },
  equipo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  fechaHoraFin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}
