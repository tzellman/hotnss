/* jshint node: true */
var faker = require('faker');

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'hotnss',
        environment : environment,
        baseURL     : '/',
        locationType: 'auto',
        EmberENV    : {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL      = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS      = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

        ENV.baseURL = '/' + ENV.modulePrefix + '/';

        // a bit counter-intuitive for now, but I will use a FixtureAdapter with the following fixtures
        // for a production build, since I won't have mock servers

        var fixtures = {
            users: [
                {username: 'tzellman', displayName: 'Tom Zellman'},
                {username: 'thawk', displayName: 'Tony Hawk'},
                {username: 'rmullen', displayName: 'Rodney Mullen'}
            ],
            posts: [
                {title: 'Ember User Guide', link: 'http://guides.emberjs.com', content: 'Read this!'},
                {title: 'Ember CLI User Guide', link: 'http://www.ember-cli.com/user-guide/'},
                {title: 'SEM.js Meetup Group', link: 'http://www.meetup.com/SEM-JS'},
                {title: 'Kangax', link: 'http://kangax.github.io/compat-table/es6/'},
                {title: 'NPM', link: 'https://www.npmjs.com/'},
                {title: 'NVM', link: 'https://github.com/creationix/nvm'},
                {title: 'Bourbon', link: 'http://bourbon.io/'}
            ]
        };

        fixtures.users.forEach(function (f, i) {
            f.id = i + 1;
        });

        fixtures.posts.forEach(function (f, i) {
            f.created   = faker.date.recent();
            f.id        = i + 1;
            f.user      = faker.random.number({min: 1, max: 3});
            f.upvotes   = faker.random.number(100);
            f.downvotes = faker.random.number(50);
        });

        ENV.FIXTURES = fixtures;
    }

    ENV.podModulePrefix = ENV.modulePrefix + '/pods';

    return ENV;
};
