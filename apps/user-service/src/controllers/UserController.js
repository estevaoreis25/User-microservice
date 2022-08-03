
const test = (req, res) => {
  return res.status(200).json('Server is running correctly')
}

module.exports = { test, }