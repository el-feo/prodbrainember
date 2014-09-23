import Ember from 'ember';

export default Ember.Controller.extend({
  topAreaName: 'Projects',
  topAreaSub:  'A list of all your projects',
  purchaseOrdersCount: 21,
  navItems:          [{name: 'All Projects', icon: 'fa fa-list fa-2x fa-fw', url: 'projects' },
                      {name: 'New Project', icon: 'fa fa-plus fa-2x fa-fw', url: 'projects.new' }],

});
