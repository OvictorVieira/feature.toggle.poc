const users = require('../models/users')

exports.create = (req, res) => {
  try {
    let createdUser = users.create(req.body)

    if(createdUser) return res.json(createdUser)
  } catch (e) {
    return res.sendStatus(400).json({
      error: {
        message: e.message
      }
    })
  }

  return res.sendStatus(500).json({
    error: {
      message: 'Não foi possível criar o usuário, tente novamente.'
    }
  })
}
