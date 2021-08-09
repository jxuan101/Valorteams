require('dotenv').config();
const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
var path = require('path');
var cron = require('node-cron');

const app = express();
const port = process.env.PORT || 5000;

const db = require('./db');
const router = require(path.resolve(__dirname, "./db/router.js"));
const scraper = path.resolve(__dirname, "./db/valorant-scraper/scraper.py");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// Run the python script to update database every week.
cron.schedule('0 8 * * Monday', () => {

	console.log("Updating database...")
	var process = spawn('python', [scraper]);
	process.on('exit', function(data) {
        console.log("Finished updating database.")
    })

});