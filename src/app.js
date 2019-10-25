const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config();

app.set('view engine', 'ejs')
app.use(express.static('./public'))

const PORT = process.env.PORT || 3000
const ip = require('ip')

app.listen(PORT , () => console.log(`running on ${PORT}`))
app.get('/health', (req, res) => res.status(200).send({msg: 'ok'}))
app.get('/', (req, res) =>  res.render('index', {ip: ip.address()}))

module.exports = app