import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['columnWidth'],
  isContentVisible: false,

  columnWidth: function(){
    return 'accordion col-md-'+this.get('width');
  }.property('width'),

  actions: {
    toggle: function(title){
      this.toggleProperty('isContentVisible');
    }
  }

});


// {{#box-accord title="YOUR TITLE HERE" width="NUMBER BETWEEN 1..12"}}
//   {{partial "PARTIAL NAME"}}
// {{/box-accord}}
