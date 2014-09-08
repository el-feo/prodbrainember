import Ember from 'ember';

export default Ember.Component.extend({
  // tagName:           li,
  className:         ['active'],
  active:            false,
  actions: {
                     toggle: function(){
                      this.toggleProperty('active');
                    }
  }

});
