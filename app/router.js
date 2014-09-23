import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Prodbrain3ENV.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    this.resource('project', {path: ':project_id'});
    this.route('edit', {path: ':project_id/edit'});
    this.route('new', {path: '/new'});
    this.resource(':project_id/assignments', function() {
      this.route('show', {path: ':assignment_id'});
    });
  });

  this.route('login');
  this.route('application');
});

export default Router;
