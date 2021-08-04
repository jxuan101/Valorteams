const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config()

// let rawdata = fs.readFileSync(path.resolve(__dirname, 'secrets.json'));
// let secrets = JSON.parse(rawdata);

mongoose
    .connect(process.env.REACT_APP_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.once("open", function() {
    console.log("Connected to MongoDB.")
})

module.exports = db