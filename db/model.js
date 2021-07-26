const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        map: { type: String, required: true },
        team: { type: Array, required: true },
        count: { type: Number, required: false},
    },
)

module.exports = mongoose.model('maps', Team)