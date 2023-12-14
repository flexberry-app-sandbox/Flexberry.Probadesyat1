import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокРаспр: DS.attr('number'),
  докумПоставки: DS.belongsTo('i-i-s-probadesyat-докум-поставки', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-probadesyat-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-probadesyat-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-probadesyat-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-распр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-распр.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-распр.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-распр.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-распр.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-распр.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспрE', 'i-i-s-probadesyat-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-probadesyat-докум-поставки', 'Номер документа поставки', {
      клиенты: belongsTo('i-i-s-probadesyat-клиенты', '', {
        наимЗаказчика: attr('Заказчик', { index: 6 }),
        телефон: attr('Телефон', { index: 7 }),
        адресПоставки: attr('Адрес поставки', { index: 8 })
      }, { index: -1, hidden: true })
    }, { index: 5, displayMemberPath: 'номерДогов' }),
    списокБарж: belongsTo('i-i-s-probadesyat-список-барж', 'Номер баржи', {

    }, { index: 2, displayMemberPath: 'номерБаржи' }),
    пунктПогрузки: belongsTo('i-i-s-probadesyat-пункт-погрузки', 'Адрес пункта погрузки', {

    }, { index: 3, displayMemberPath: 'адрес' }),
    списокКонтей: belongsTo('i-i-s-probadesyat-список-контей', 'Номер контейнера', {

    }, { index: 4, displayMemberPath: 'номерКонтей' })
  });

  modelClass.defineProjection('ФормирРаспрL', 'i-i-s-probadesyat-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    списокБарж: belongsTo('i-i-s-probadesyat-список-барж', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 2 })
    }, { index: -1, hidden: true }),
    докумПоставки: belongsTo('i-i-s-probadesyat-докум-поставки', 'Номер документа поставки', {
      номерДогов: attr('Номер документа поставки', { index: 3 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-probadesyat-пункт-погрузки', 'Адрес пункта погрузки', {
      адрес: attr('Адрес пункта погрузки', { index: 4 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-probadesyat-список-контей', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
