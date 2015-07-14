import DS from 'ember-data';
import config from '../config/environment';

var Post = DS.Model.extend({
    title    : DS.attr('string'),
    content  : DS.attr('string'),
    link     : DS.attr('string'),
    created  : DS.attr('date'),
    updated  : DS.attr('date'),
    upvotes  : DS.attr('number'),
    downvotes: DS.attr('number'),
    tags     : DS.attr('object'),
    user     : DS.belongsTo('user', {async: true})
});

if (config.environment === 'production') {
    Post.reopenClass({
        FIXTURES: config.FIXTURES.posts
    });
}

export default Post;
