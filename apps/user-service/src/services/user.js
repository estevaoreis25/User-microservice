const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')

const createUser = async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(user.password, salt)
    const response = await prisma.user.create({
      data: {
        email: user.email,
        password: hash,
        name: user.name,
      }
    });
    return response
  } catch (e) {
    throw e
  }
}

const getAllUsers = async () => {
  try {
    const response = await prisma.user.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    return response

  } catch (e) {
    throw e
  }
}

const findUserByEmail = async (email) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    return response

  } catch (e) {
    throw e
  }

}

const findUserById = async (id) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })
    return response

  } catch (e) {
    throw e
  }

}

const updateUser = async (id, updatedUser) => {
  try {
    var hash = undefined
    if (updateUser.password) {
      const salt = await bcrypt.genSalt(10);
      hash = bcrypt.hashSync(updateUser.password, salt)
    }
    const response = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        name: updatedUser.name || undefined,
        email: updatedUser.email || undefined,
        password: hash || undefined

      }
    })
    return response

  } catch (e) {
    throw e
  }
}

module.exports = { createUser, getAllUsers, findUserByEmail, findUserById, updateUser }