let id = 0

let database = []

const gerarId = () => {
  id = id + 1

  return id
}

const lastUser = () => {
  return database[database.length - 1]
}

exports.create = (userData) => {
  database.push(
    {
      'id': gerarId(),
      'name': userData.name,
      'email': userData.email
    }
  )

  return lastUser()
}
