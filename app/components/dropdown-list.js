import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'btn-group',
  isDropdownVisible: false,

  btnClassName: function(){
    return 'btn-'+this.get('item');
  }.property('item'),

  actions: {
    toggle: function(item){
      this.toggleProperty('isDropdownVisible');
    }
  }
});

// {{#dropdown-list selected=selected item="danger"}}
//   {{partial "dropdown-menu"}}
// {{/dropdown-list}}
