import DS from 'ember-data';
var ApplicationAdapter;

ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api'
});

export default ApplicationAdapter;
