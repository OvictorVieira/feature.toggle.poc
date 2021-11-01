const { startUnleash } = require('unleash-client');

const featureIsEnabled = async (featureName, context = {}) => {
  const unleash = await startUnleashSDK()

  if(unleash) return unleash.isEnabled(featureName, context)

  return false
}

const startUnleashSDK = async () => {
  try {
    return await startUnleash({
      url: process.env.API_URL,
      appName: process.env.APP_NAME,
      environment: process.env.APP_ENV,
      customHeaders: {
        Authorization: process.env.API_KEY
      }
    })
  } catch (e) {
    console.log(`Ocorreu um erro ao iniciar o Unleash. Erro: ${e.message}`)
  }
}

module.exports = featureIsEnabled
