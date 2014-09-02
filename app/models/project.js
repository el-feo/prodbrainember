import DS from 'ember-data';

export default DS.Model.extend({
  name:                DS.attr('string'),
  currencyCode:        DS.attr('string'),
  purchaseOrderStart:  DS.attr('number'),
  principalStart:      DS.attr('date'),
  principalEnd:        DS.attr('date'),
  billingCompany:      DS.attr('string'),
  billingAddress1:     DS.attr('string'),
  billingAddress2:     DS.attr('string'),
  billingCity:         DS.attr('string'),
  billingState:        DS.attr('string'),
  billingZip:          DS.attr('string'),
  billingCountry:      DS.attr('string'),
  billingPhone:        DS.attr('string'),
  billingFax:          DS.attr('string'),
  billingEmail:        DS.attr('string'),
  assignments:         DS.hasMany('assignment', {async: true})
});
