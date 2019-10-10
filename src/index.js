const app = require('./app')
const PORT = process.env.PORT || 3000
const ip = require('ip')

app.listen(PORT , () => console.log(`running on ${PORT}`))
app.get('/health', (req, res) => res.status(200).send({msg: 'ok'}))
app.get('/', (req, res) => res.send(`<h1>Hello from ${ip.address()}</h1>`))
