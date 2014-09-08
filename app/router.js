import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Prodbrain3ENV.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    this.route('show', {path: ':project_id'});
  });
  this.resource('assignments', function() {
    this.route('show', {path: ':assignment_id'});
  });
});

export default Router;
