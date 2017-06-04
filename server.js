const express = require('express');

let app = express();

// serving static files
app.use(express.static('public'));

app.listen(3000, () => {
	console.log('app is listening on port 3000');
});
