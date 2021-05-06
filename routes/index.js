const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
	resp.render('index');
});
router.post('/moodEvaluation', function(req, resp) {
	var danceability = req.body.danceability;
	var energy = req.body.energy;
	var loudness = req.body.loudness;
	var speechiness = req.body.speechiness;
	var acousticness = req.body.acousticness;
	var instrumentalness = req.body.instrumentalness;
	var liveness = req.body.liveness;
	var valence = req.body.valence;
	var tempo = req.body.tempo;
	console.log(danceability);
	console.log(energy);
	console.log(loudness);
	console.log(speechiness);
	console.log(acousticness);
	console.log(instrumentalness);
	console.log(liveness);
	console.log(valence);
	console.log(tempo);
	resp.send(
		'danceability: ' +
			danceability +
			'\nenergy: ' +
			energy +
			'\nloudness: ' +
			loudness +
			'\nspeechiness: ' +
			speechiness +
			'\nacousticness: ' +
			acousticness +
			'\ninstrumentalness: ' +
			instrumentalness +
			'\nliveness: ' +
			liveness +
			'\nvalence: ' +
			valence +
			'\ntempo: ' +
			tempo
	);
});
module.exports = router;
