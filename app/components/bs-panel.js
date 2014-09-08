import Ember from 'ember';

export default Ember.Component.extend({
  // classNames: ['accordion-group'],
  // classTypePrefix: ['accordion'],
  classNames: ['panel'],
  classTypePrefix: ['panel'],
  classNameBindings: ['panelType','fade', 'fade:in'],
  clicked: null,
  onClose: null,
  fade: true,
  collapsible: false,
  open: false,
  cog:  false,
  padding: false,
  type: 'default',
  actions: {
    close: function() {
      this.sendAction('onClose');
      this.$().removeClass('in');
      return setTimeout((function() {
        return this.destroy();
      }).bind(this), 250);
    }
  },
  click: function() {
    return this.sendAction('clicked', event);
  },
  collapsibleBodyId: (function() {
    return "" + (this.get('elementId')) + "_body";
  }).property('collapsible'),
  collapsibleBodyLink: (function() {
    return "#" + (this.get('elementId')) + "_body";
  }).property('collapsibleBodyId'),
  panelType: function() {
    return "panel-" + (this.get('type'));
  }.property('type'),
});
