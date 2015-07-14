var faker = require('faker');

var FIXTURES = [
    {title: 'Ember User Guide', link: 'http://guides.emberjs.com', content: 'Read this!'},
    {title: 'Ember CLI User Guide', link: 'http://www.ember-cli.com/user-guide/'},
    {title: 'SEM.js Meetup Group', link: 'http://www.meetup.com/SEM-JS'},
    {title: 'Kangax', link: 'http://kangax.github.io/compat-table/es6/'},
    {title: 'NPM', link: 'https://www.npmjs.com/'},
    {title: 'NVM', link: 'https://github.com/creationix/nvm'},
    {title: 'Bourbon', link: 'http://bourbon.io/'}
];

FIXTURES.forEach(function (f, i) {
    f.created   = faker.date.recent();
    f.id        = i + 1;
    f.user      = faker.random.number({min: 1, max: 3});
    f.upvotes   = faker.random.number(100);
    f.downvotes = faker.random.number(50);
});


module.exports = function (app) {
    var express     = require('express');
    var postsRouter = express.Router();

    postsRouter.get('/', function (req, res) {
        res.send({
            'posts': FIXTURES
        });
    });

    postsRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    postsRouter.get('/:id', function (req, res) {
        res.send({
            'posts': FIXTURES.reduce(function (current, e) {
                return current || (e.id === +req.params.id ? e : current);
            }, null)
        });
    });

    postsRouter.put('/:id', function (req, res) {
        res.send({
            'posts': {
                id: req.params.id
            }
        });
    });

    postsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/api/posts', postsRouter);
};
