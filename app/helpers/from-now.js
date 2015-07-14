import Ember from 'ember';
import moment from "npm:moment/min/moment.min";

export default Ember.Handlebars.makeBoundHelper(function (milliseconds) {
    var s = "";
    if (milliseconds !== undefined && milliseconds !== null && milliseconds > 0) {
        s = moment(milliseconds).fromNow();
    }
    return new Ember.Handlebars.SafeString(s);
});