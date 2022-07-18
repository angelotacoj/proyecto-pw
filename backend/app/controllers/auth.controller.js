const db = require('../models/index.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.config')
const { sequelize } = require('../models/index.js')

const Usuario = db.usuarios
const Doctor = db.doctores
const Paciente = db.pacientes

exports.login = async (req, res) => {
  try {
    let { dni, password } = req.body

    // buscamos si el usuario existe
    const user = await Usuario.findOne({
      where: {
        dni
      }
    })
    if (!user) {
      res.status(404).json({ msg: 'Usuario con este dni no encontrado' })
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires
        })
        res.json({
          user: user,
          token: token
        })
      } else {
        // Unauthorized Access
        res.status(401).json({ msg: 'Contraseña incorrecta' })
      }
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.registroDoctor = async (req, res) => {
  const t = await sequelize.transaction()

  try {
    // buscamos si el usuario existe
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        dni: req.body.dni
      }
    })

    if (usuarioEncontrado) {
      res.status(404).json({ msg: 'El usuario ya fue registrado' })
      return
    }

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))

    const user = await Usuario.create({
      dni: req.body.dni,
      nombre: req.body.nombre,
      apellidoPaterno: req.body.apellidoPaterno,
      apellidoMaterno: req.body.apellidoMaterno,
      numContacto: req.body.numContacto,
      fechaNacimiento: req.body.fechaNacimiento,
      imagen: req.body.imagen,
      email: req.body.email,
      password
    })

    // Creamos el token
    let token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires
    })

    await Doctor.create({
      codDoctor: req.body.dni,
      especialidadId: req.body.especialidadId
    })
    res.json({
      user: user,
      token: token
    })
  } catch (error) {
    res.status(500).json(error)
    await t.rollback()
  }
}

exports.registroPaciente = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        dni: req.body.dni
      }
    })

    if (usuarioEncontrado) {
      res.status(404).json({ msg: 'El usuario ya fue registrado' })
      return
    }

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))

    const user = await Usuario.create({
      dni: req.body.dni,
      nombre: req.body.nombre,
      apellidoPaterno: req.body.apellidoPaterno,
      apellidoMaterno: req.body.apellidoMaterno,
      numContacto: req.body.numContacto,
      fechaNacimiento: req.body.fechaNacimiento,
      imagen: req.body.imagen,
      email: req.body.email,
      password
    })
    // Creamos el token
    let token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires
    })

    Paciente.create({
      codPaciente: req.body.dni
    })

    res.json({
      user: user,
      token: token
    })
  } catch (error) {
    res.status(500).json(error)
    await t.rollback()
  }
}
