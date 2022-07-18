import {DataTypes, Sequelize} from "sequelize";


const db = require('./index.js')
const Especialidad = db.especialidades

const CADENA_CONEXION = "postgres://postgres:postgres@localhost:4000/postgres"
const sequelize = new Sequelize(CADENA_CONEXION)

const Articulo = sequelize.define("Articulo",{
    id: {
        primaryKey: true ,
        type: DataTypes.STRING ,
        defaultValue: Sequelize.STRING,
    },
    especialidadId: {
        field: 'especialidad_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Especialidad,
          key: 'id'
        }
      },
    texto: DataTypes.STRING(100),
    src_image: {
        type: DataTypes.TEXT
    }
},
{
    freezeTableName:true,
    timestamps: false,
})
Articulo.belongsTo(Especialidad, {
    as: 'especialidad',
    foreignKey: 'especialidadId'
})
Especialidad.hasMany(Articulo,{
    foreignKey:"id"
})

export {Articulo}