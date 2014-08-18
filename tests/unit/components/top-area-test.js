import { test, moduleForComponent } from 'ember-qunit';
moduleForComponent('top-area', 'TopAreaComponent', {});

test('it renders', function() {
  var component;
  expect(2);
  component = this.subject();
  equal(component.state, 'preRender');
  this.append();
  return equal(component.state, 'inDOM');
});
