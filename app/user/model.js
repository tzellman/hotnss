import DS from 'ember-data';

export default DS.Model.extend({
    username   : DS.attr('string'),
    email      : DS.attr('string'),
    displayName: DS.attr('string'),
    location   : DS.attr('string'),
    bio        : DS.attr('string')
});
