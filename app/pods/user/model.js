import DS from "ember-data";
import config from "hotnss/config/environment";
const {attr, Model} = DS;

var User = Model.extend({
    username: attr('string'),
    email: attr('string'),
    displayName: attr('string'),
    location: attr('string'),
    bio: attr('string')
});

if (config.environment === 'production') {
    User.reopenClass({
        FIXTURES: config.FIXTURES.users
    });
}

export default User;