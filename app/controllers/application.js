import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    timerTicked: function() { console.log('timer ticked'); }
    },
  navItems:         [{name: 'All Projects', icon: 'fa fa-list fa-2x fa-fw', url: 'projects' }],
});
