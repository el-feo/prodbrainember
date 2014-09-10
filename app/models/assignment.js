import DS from 'ember-data';

export default DS.Model.extend({
  email:           DS.attr('string'),
  project:       DS.belongsTo('project'),
  userId:          DS.attr('number'),
  title:           DS.attr('string'),
  createdAt:       DS.attr('date'),
  updatedAt:       DS.attr('date'),
  roleId:          DS.attr('number'),
  mobile:          DS.attr('string'),
  phone:           DS.attr('string'),
  fax:             DS.attr('string'),
  departmentId:    DS.attr('number'),
  company:         DS.attr('string'),
  address1:        DS.attr('string'),
  address2:        DS.attr('string'),
  city:            DS.attr('string'),
  state:           DS.attr('string'),
  zip:             DS.attr('string'),
  country:         DS.attr('string'),
  taxNumber:       DS.attr('string'),
  fullName:        DS.attr('string'),
  createdId:       DS.attr('number'),
  website:         DS.attr('string'),
  account:         DS.attr('string')
});
