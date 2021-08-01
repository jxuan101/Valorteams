const mongoose = require('mongoose');
const database_uri = require ('./constants.js');
const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'secrets.json'));
let secrets = JSON.parse(rawdata);

mongoose
    .connect(secrets['database_uri'], { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.once("open", function() {
    console.log("Connected to MongoDB.")
})

module.exports = db