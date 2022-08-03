const express = require('express');
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use('/', require('./routes'))
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server is runnig in PORT: ${port}`))