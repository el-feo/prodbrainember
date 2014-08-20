import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function(){
      var self = this;
      this.$("table").dataTable({
        bJQueryUI: false,
        bAutoWidth: false,
        sPaginationType: "full_numbers",
        sDom: "<\"table-header\"fl>t<\"table-footer\"ip>"
      });
    }
});
