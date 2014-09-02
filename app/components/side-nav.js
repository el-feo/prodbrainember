import Ember from 'ember';

export default Ember.Component.extend({
  navItems:         [{name: 'All Projects', icon: 'fa fa-list fa-2x', },
                    {name: 'Project', icon: 'fa fa-film fa-2x' },
                    {name: 'P.O.s', icon: 'fa fa-file-text-o fa-2x'},
                    {name: 'Crew', icon: 'fa fa-group fa-2x' },
                    {name: 'Vendors', icon: 'fa fa-barcode fa-2x'},
                    {name: 'Dept.s', icon: 'fa fa-sitemap fa-2x'},
                    {name: 'Help', icon: 'fa fa-question fa-2x'}],
  _activateButton:  function(){
                      this.$();
                    }.on('didInsertElement')
});
