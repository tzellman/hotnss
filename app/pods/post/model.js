import DS from "ember-data";
import config from "hotnss/config/environment";

const {attr, Model, belongsTo} = DS;

var Post = Model.extend({
    title: attr('string'),
    content: attr('string'),
    link: attr('string'),
    created: attr('date'),
    updated: attr('date'),
    upvotes: attr('number'),
    downvotes: attr('number'),
    tags: attr('object'),
    user: belongsTo('user', {async: true}),
    icon: attr('string')
});

if (config.environment === 'production') {
    Post.reopenClass({
        FIXTURES: config.FIXTURES.posts
    });
}

export default Post;
