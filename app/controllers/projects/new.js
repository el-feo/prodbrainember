import Ember from 'ember';

export default Ember.Controller.extend({
  actions:  {
   createProject: function() {
     var newProject = this.store.createRecord('project', {
        name: this.get('name')
      });
      newProject.save();
   }
  }
});
