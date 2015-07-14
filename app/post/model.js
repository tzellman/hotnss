import DS from 'ember-data';

export default DS.Model.extend({
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
