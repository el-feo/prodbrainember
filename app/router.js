import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Prodbrain3ENV.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    this.route('show', {path: ':project_id'});
  });
});

export default Router;
