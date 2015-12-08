var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//confiugre an app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// use middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'lib')));
// define routes
var todoItems = [{
    id: 1,
    desc: 'Node'
}, {
    id: 2,
    desc: 'Angular'
}, {
    id: 3,
    desc: 'MongoDB'
}, {
    id: 4,
    desc: 'Express'
}];

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Todo list',
        items: todoItems
    });
});
app.post('/add', function(req, res) {
    var newItem = req.body.newItem;
    console.log(newItem);
    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });
    res.redirect('/');

});

app.listen(9000, function(req, res) {
    console.log('Server ready on port 9000');
});
