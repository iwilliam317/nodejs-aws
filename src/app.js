const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config();

app.set('view engine', 'ejs')
app.use(express.static('./public'))

module.exports = app