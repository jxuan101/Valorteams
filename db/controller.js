const Team = require('./model.js')

getTeamsByMap = async (req, res) => {
    await Team.find({ "map": req.params.map }).sort({'count' : -1}).exec(function(err, teams) {
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

module.exports = {
    getTeamsByMap,
}