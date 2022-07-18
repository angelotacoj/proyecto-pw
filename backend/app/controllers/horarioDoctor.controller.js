const db = require('../models/index.js')
const HorarioDoctor = db.horariosDoctor

exports.index = async (req, res) => {
  const items = await HorarioDoctor.findAll({
    where: {
      codDoctor: req.user.dni
    },
    include: ['usuario']
  })
  res.json({
    items
  })
}

exports.show = async (req, res) => {
  try {
    const horarioDoctor = await HorarioDoctor.findByPk(req.params.id)
    // TODO: filter only document
    res.json({ data: horarioDoctor })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.store = async (req, res) => {
  try {
    console.log('req.user', req.user)
    const request = {
      codDoctor: req.user.dni,
      dia: req.body.dia,
      hora: req.body.hora,
      mes: req.body.mes,
      anio: req.body.anio
    }
    console.log('request', request)
    const horarioDoctor = await HorarioDoctor.create(request)
    res.json({
      data: horarioDoctor
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.update = async (req, res) => {
  try {
    const horarioDoctor = await HorarioDoctor.update(
      { dia: req.body.dia, dia: req.body.hora, dia: req.body.mes, dia: req.body.anio },
      { where: { id: req.params.id } }
    )
    res.json({ data: horarioDoctor })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.destroy = async (req, res) => {
  try {
    const horarioDoctor = await HorarioDoctor.destroy({ where: { id: req.params.id } })
    res.json({ data: horarioDoctor })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports
