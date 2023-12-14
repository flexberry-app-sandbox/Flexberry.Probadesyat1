import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadesyat-формир-рез-пос', 'Unit | Model | i-i-s-probadesyat-формир-рез-пос', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probadesyat-докум-поставки',
    'model:i-i-s-probadesyat-инф-о-заказе',
    'model:i-i-s-probadesyat-клиенты',
    'model:i-i-s-probadesyat-организация',
    'model:i-i-s-probadesyat-пункт-погрузки',
    'model:i-i-s-probadesyat-список-барж',
    'model:i-i-s-probadesyat-список-контей',
    'model:i-i-s-probadesyat-товары',
    'model:i-i-s-probadesyat-формир-распр',
    'model:i-i-s-probadesyat-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
