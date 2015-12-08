var express = require('express');
var router = express.Router();

var todos = [{
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

//configue the routes
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Using Router',
        items: todos
    });
});
router.post('/add', function(req, res) {
    var newItem = req.body.newItem;
    todos.push({
        id: todos.length + 1,
        desc: newItem
    });
    res.redirect('/');
});

module.exports = router;
