const doctorModel = require('./doctor.model')

module.exports = (sequelize, Sequelize) => {
  // const Doctor = DoctorModel(sequelize, Sequelize)
  const HorarioDoctor = sequelize.define(
    'HorarioDoctor',
    {
      codDoctor: {
        field: 'cod_doctor',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
        // references: {
        //   model: Doctor,
        //   key: 'codDoctor'
        // }
      },
      dia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      anio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    { tableName: 'horarios_doctor', underscored: true }
  )

  return HorarioDoctor
}
