const userService = require('../services/user')

const createUser = async (req, res) => {
  try {
    const { email } = req.body
    const existentUser = await userService.findUserByEmail(email)

    if (existentUser) {
      throw new Error('There is already a user with that email')
    }

    const user = await userService.createUser(req.body)
    return res.status(200).json(user)

  } catch (e) {
    return res.status(400).json(`Error creating user. ERROR => ${e.message}`)
  }
}

const getAll = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users)

  } catch (e) {
    return res.status(400).json(`Error searching for all users. ERROR => ${e}`)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const existentUser = await userService.findUserById(id)

    if (!existentUser) {
      throw new Error('There is no user with that id')
    }
    const user = await userService.updateUser(id, req.body)
    return res.status(200).json(user)

  } catch (e) {
    return res.status(400).json(`Error updating user. ERROR => ${e.message}`)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const existentUser = await userService.findUserById(id)

    if (!existentUser) {
      throw new Error('There is no user with that id')
    }
    const deletedUser = await userService.deleteUser(id)
    return res.status(200).json(deletedUser)

  } catch (e) {
    return res.status(400).json(`Error deleting user. ERROR => ${e.message}`)
  }
}

module.exports = { createUser, getAll, updateUser, deleteUser }