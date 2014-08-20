import DS from 'ember-data';

export default DS.Model.extend({
  name:                 DS.attr('string'),
  currency_code:        DS.attr('string'),
  purchase_order_start: DS.attr('number'),
  principal_start:      DS.attr('date'),
  principal_end:        DS.attr('date'),
  billing_company:      DS.attr('string'),
  billing_address1:     DS.attr('string'),
  billing_address2:     DS.attr('string'),
  billing_city:         DS.attr('string'),
  billing_state:        DS.attr('string'),
  billing_zip:          DS.attr('string'),
  billing_country:      DS.attr('string'),
  billing_phone:        DS.attr('string'),
  billing_fax:          DS.attr('string'),
  billing_email:        DS.attr('string'),
  po_count:             DS.attr('number')
});
