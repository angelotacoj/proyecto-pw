const db = require('../models/index.js')
const Doctor = db.doctores

exports.index = async (req, res) => {
  const items = await Doctor.findAll({
    include: ['usuario', 'especialidad', 'horarios'],
    attributes: { exclude: ['password'] }
  })
  res.json({
    items
  })
}

exports.show = async (req, res) => {
  const doctor = await Doctor.findOne({
    where: {
      codDoctor: req.params.id
    },
    include: ['usuario', 'especialidad', 'horarios']
  })
  res.json({ data: doctor })
}

exports.store = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body)
    res.json({
      data: doctor
    })
  } catch (error) {
    res.status(500).json(err)
  }
}

exports.update = async (req, res) => {
  try {
    console.log('req.params.id', req.params.id)
    const doctor = await Doctor.update(
      { name: req.body.name },
      { where: { id: req.params.id } }
    )
    res.json({ data: doctor })
  } catch (error) {
    res.status(500).json(err)
  }
}

exports.destroy = async (req, res) => {
  try {
    const doctor = await Doctor.destroy({ where: { id: req.params.id } })
    res.json({ data: doctor })
  } catch (error) {
    res.status(500).json(err)
  }
}

module.exports
