import Ember from 'ember';

export default Ember.Controller.extend({
  purchaseOrdersCount: 32,
  navItems:         [{name: 'All Projects', icon: 'fa fa-list fa-2x fa-fw', url: 'projects' },
                     {name: 'Project', icon: 'fa fa-film fa-2x fa-fw', url: 'projects' },
                     {name: 'P.O.s', icon: 'fa fa-file-text-o fa-2x fa-fw', url: 'projects'},
                     {name: 'Crew', icon: 'fa fa-group fa-2x fa-fw', url: 'projects' },
                     {name: 'Vendors', icon: 'fa fa-barcode fa-2x fa-fw', url: 'projects'},
                     {name: 'Dept.s', icon: 'fa fa-sitemap fa-2x fa-fw', url: 'projects'},
                     {name: 'Help', icon: 'fa fa-question fa-2x fa-fw', url: 'projects'}],
});
