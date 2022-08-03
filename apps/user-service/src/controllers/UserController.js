const userService = require('../services/user')

const createUser = async (req, res) => {
  try {

    const user = await userService.createUser(req.body)
    return res.status(200).json(user)

  } catch (e) {
    return res.status(400).json(`There was an error creating a new user in the database ${e}`)
  }
}
module.exports = { createUser }