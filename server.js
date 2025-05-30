var express = require('express')
var app = express()
var path = require('path')
var {MongoClient} = require('mongodb')
const PORT = 8080;
const client = new MongoClient('mongodb://localhost:27017')

app.use('/Stylings', express.static(path.join(__dirname, 'Stylings')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'HTML Files', 'index.html'))
});

app.listen(8080, () =>{
	console.log(`Server is running at http://localhost:${PORT}`);
})