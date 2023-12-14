import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadesyat-товары', 'Unit | Serializer | i-i-s-probadesyat-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probadesyat-товары',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probadesyat-ед-изм',
    'transform:i-i-s-probadesyat-состоян-заказа',
    'transform:i-i-s-probadesyat-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
