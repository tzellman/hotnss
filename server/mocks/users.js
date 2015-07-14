var FIXTURES = [
    {username: 'tzellman', displayName: 'Tom Zellman'},
    {username: 'thawk', displayName: 'Tony Hawk'},
    {username: 'rmullen', displayName: 'Rodney Mullen'}
];

FIXTURES.forEach(function (f, i) {
    f.id = i + 1;
});

module.exports = function (app) {
    var express     = require('express');
    var usersRouter = express.Router();

    usersRouter.get('/', function (req, res) {
        res.send({
            'users': FIXTURES
        });
    });

    usersRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    usersRouter.get('/:id', function (req, res) {
        res.send({
            'users': FIXTURES.reduce(function (current, e) {
                return current || (e.id === +req.params.id ? e : current);
            }, null)
        });
    });

    usersRouter.put('/:id', function (req, res) {
        res.send({
            'users': {
                id: req.params.id
            }
        });
    });

    usersRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/api/users', usersRouter);
};
