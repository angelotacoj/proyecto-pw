const especialidadModel = require('./especialidad.model')
const usuarioModel = require('./usuario.model')
const horarioDoctorModel = require('./horarioDoctor.model.')

module.exports = (sequelize, Sequelize) => {
  const User = usuarioModel(sequelize, Sequelize)
  const Especialidad = especialidadModel(sequelize, Sequelize)
  const HorarioDoctor = horarioDoctorModel(sequelize, Sequelize)
  const Doctor = sequelize.define(
    'Doctor',
    {
      codDoctor: {
        field: 'cod_doctor',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: User,
          key: 'dni'
        }
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
      tipoAtencion: {
        field: 'tipo',
        type: Sequelize.STRING,
      },
      precioxConsulta: {
        field: 'precio',
        type: Sequelize.INTEGER
      }
    },
    { tableName: 'doctores', freezeTableName: true, timestamps: false, underscored: true }
  )
  Doctor.belongsTo(User, {
    as: 'usuario',
    foreignKey: 'codDoctor'
  })
  Doctor.belongsTo(Especialidad, {
    as: 'especialidad',
    foreignKey: 'especialidadId'
  })

  Doctor.hasMany(HorarioDoctor, {
    as: 'horarios',
    foreignKey: 'codDoctor'
  })
  return Doctor
}
