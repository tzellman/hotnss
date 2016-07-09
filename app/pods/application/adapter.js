import DS from "ember-data";
import config from "hotnss/config/environment";

var Adapter;

if (config.environment === 'production') {
    Adapter = DS.FixtureAdapter.extend({});
} else {
    Adapter = DS.RESTAdapter.extend({
        namespace: 'api',
        shouldReloadAll: () => true
    });
}

export default Adapter;