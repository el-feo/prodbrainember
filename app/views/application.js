import Ember from 'ember';

export default Ember.View.extend({
  classNames: 'dropdowns',
  
  click: function(e){
    if ($(e.target).is('.dropdowns')){
      $('ul.dropdown-menu').hide();
    }
  }
});
