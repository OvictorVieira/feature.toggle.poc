const express        = require('express')
const router         = express.Router()
const userController = require('../controllers/usersController')

router.post('/vendedor', () => {
  return console.log('depois de chamar a rota /user, ele me chamou (SOU A FUNCAO)')
})
// router.get('/users', userController.list_all_users)

module.exports = router;