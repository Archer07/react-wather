const express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;


//check if the protocol used by the client is http, not https. Forward it to http if it's not
// because openWeathermap operates only on http
app.use((req, res, next) => {
		if (req.headers['x-forwarded-proto'] === 'https') {
			res.redirect('http://' + req.hostname + req.url);
		} else {
			next();
		}
});

// serving static files
app.use(express.static('public'));

app.listen(PORT, () => {
	console.log('App is Listening on port ', PORT);
});
