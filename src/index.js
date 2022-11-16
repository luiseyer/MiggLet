const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Hello Frog 🐸!</h1>');
});

app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`);
});
