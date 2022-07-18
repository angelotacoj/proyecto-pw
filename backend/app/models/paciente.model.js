const UsuarioModel = require('./usuario.model')

module.exports = (sequelize, Sequelize) => {
  const Paciente = sequelize.define(
    'Paciente',
    {
      codPaciente: {
        field: 'cod_paciente',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: UsuarioModel(sequelize, Sequelize),
          key: 'dni'
        }
      }
    },
    {
      tableName: 'pacientes',
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  )

  return Paciente
}
