import DS from 'ember-data';
var ApplicationAdapter;

// ApplicationAdapter = DS.FirebaseAdapter.extend({
//   firebase: new Firebase('https://prodsense.firebaseio.com/')
// });

ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
});

export default ApplicationAdapter;
