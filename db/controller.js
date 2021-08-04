const Team = require('./model.js')

getTeamsByMap = async (req, res) => {
    const map_name = req.params.map.charAt(0).toUpperCase() + req.params.map.slice(1);
    await Team.find({ "map": map_name }).sort({'count' : -1}).exec(function(err, teams) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!teams) {
            return res
                .status(404)
                .json({ success: false, error: `Teams not found.`})
        }

        return res.status(200).json({ success: true, data: teams })
    })
}

getTimestamp = async (req, res) => {
    await Team.find({ "update_date": {$exists: true} }, function(err, doc) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!doc) {
            return res
                .status(404)
                .json({ success: false, error: `Timestamp not found.`})
        }

        return res.status(200).json({ success: true, data: doc })
    })
}

module.exports = {
    getTeamsByMap,
    getTimestamp
}