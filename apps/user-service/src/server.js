const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json())
app.use("/user", routes)
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server is runnig in PORT: ${port}`))  