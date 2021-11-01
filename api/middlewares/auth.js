const featureIsEnabled = require('../../config/unleash')

const featureToggleProviderAuth = 'hub_backend.provider.auth'

module.exports = async (req, res, next) => {
  const isEnabled = await featureIsEnabled(featureToggleProviderAuth, { userId: req.headers['user-id'] })

  if (isEnabled) return next()

  return res.status(404).json({
    error: {
      message: 'Recurso não encontrado.'
    }
  })
}
