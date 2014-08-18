import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'prodbrain3', // TODO: loaded via config
  Resolver: Resolver,
  LOG_TRANSITIONS: true
});

loadInitializers(App, 'prodbrain3');

export default App;
