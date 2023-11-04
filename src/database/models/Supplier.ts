import { DataTypes } from 'sequelize'
import type { Sequelize } from 'sequelize'

export const defineSupplier = (sequelize: Sequelize) => {

    return sequelize.define('Supplier',
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                unique: true,
                primaryKey: true,
                comment: 'identificador universal unico para la tabal proveedor'
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
            descripcion: {
                type: DataTypes.TEXT,
                allowNull: true,
                comment: 'descripcion del proveedor'
            },
            activo: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            }
        },
        {
            tableName: 'proveedor',
            freezeTableName: true,
            underscored: true,
            timestamps: false
        }
    )
}

export default defineSupplier