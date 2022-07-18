module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define(
    'Especialidad',
    {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
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
    {
      tableName: 'especialidades',
      timestamps: true,
      underscored: true
    }
  )

  return Usuario
}
