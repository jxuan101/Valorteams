const express = require('express')
const cors = require('cors')
var path = require('path')

const app = express();
const port = process.env.PORT || 5000;

const db = require('./db')
const router = require(path.resolve(__dirname, "./db/router.js"))

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.use('/api', router)

app.listen(port, () => console.log(`Listening on port ${port}`))