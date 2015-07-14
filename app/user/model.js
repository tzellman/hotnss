import DS from 'ember-data';
import config from '../config/environment';

var User = DS.Model.extend({
    username   : DS.attr('string'),
    email      : DS.attr('string'),
    displayName: DS.attr('string'),
    location   : DS.attr('string'),
    bio        : DS.attr('string')
});

if (config.environment === 'production') {
    User.reopenClass({
        FIXTURES: config.FIXTURES.users
    });
}

export default User;