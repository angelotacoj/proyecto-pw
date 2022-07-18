/*const especialidadModel = require('./especialidad.model')


module.exports = (sequelize, Sequelize) => {
    const Especialidad = especialidadModel(sequelize, Sequelize)
    const Articulo = sequelize.define(
      'Articulo',
      {
        idArticulo: {
          field: 'id_articulo',
          primaryKey: true,
          type: Sequelize.STRING,
          allowNull: false
        },
        especialidadId: {
            field: 'especialidad_id',
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: Especialidad,
              key: 'id'
            }
          },
        src_image: {
          field: 'src_image',
          type: Sequelize.TEXT,
        },
        texto: {
          field: 'texto',
          type: Sequelize.STRING
        }
      },
      { tableName: 'articulos', freezeTableName: true, timestamps: false, underscored: true }
    )
    Articulo.belongsTo(Especialidad, {
        as: 'especialidad',
        foreignKey: 'especialidadId'
    })

    return Articulo
  }
  */