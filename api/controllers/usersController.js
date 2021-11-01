const users = require('../models/users')

exports.create = (req, res) => {
  try {
    let createdUser = users.create(req.body)

    if(createdUser) return res.status(200).json(createdUser)
  } catch (e) {
    return res.status(400).json({
      error: {
        message: e.message
      }
    })
  }

  return res.status(500).json({
    error: {
      message: 'Não foi possível criar o usuário, tente novamente.'
    }
  })
}
