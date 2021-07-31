const mongoose = require('mongoose');
const database_uri = require ('./constants.js');

mongoose
    .connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.once("open", function() {
    console.log("Connected to MongoDB.")
})

module.exports = db