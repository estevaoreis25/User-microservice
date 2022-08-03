const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')

const createUser = async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(user.password, salt)
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


module.exports = { createUser }