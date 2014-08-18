import Ember from 'ember';

export default Ember.Controller.extend({
  purchaseOrdersCount: 21,
  time: function() {
    return (new Date()).toDateString();
  }.property()
});
