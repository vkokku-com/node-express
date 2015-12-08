var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//configure an app
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'lib')));
app.use(require('./todos'));

app.listen(4000, function() {
    console.log('Server ready on port 4000');
})
