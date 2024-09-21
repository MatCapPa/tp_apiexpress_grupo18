const express = require('express')
const port = 3000 // se deberia mover al .env???
const app = express()

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.listen(port, () => {
  console.log(`App escuchando puerto htpp://localhost:${port}`)
})
