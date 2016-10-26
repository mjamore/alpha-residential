// Dependencis
var express = require('express');
var exphbs  = require('express-handlebars');



// Express application
var app = express();



// Application configuration
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));



// Routes
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/services', function(req, res) {
	res.render('services');
});

app.get('/about', function(req, res) {
	res.render('about');
});



// Start web server on port 8008
app.listen(8008, function() {
	console.log('application running on port 8008');
});