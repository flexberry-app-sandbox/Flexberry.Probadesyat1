import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-probadesyat-состоян-заказа'),
  удовлКлиента: DS.attr('i-i-s-probadesyat-удовл-кл'),
  формирРаспр: DS.belongsTo('i-i-s-probadesyat-формир-распр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-рез-пос.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличДеф: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-рез-пос.validations.наличДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-рез-пос.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКлиента: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-рез-пос.validations.удовлКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирРаспр: {
    descriptionKey: 'models.i-i-s-probadesyat-формир-рез-пос.validations.формирРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРезПосE', 'i-i-s-probadesyat-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    формирРаспр: belongsTo('i-i-s-probadesyat-формир-распр', 'Формир распр', {
      докумПоставки: belongsTo('i-i-s-probadesyat-докум-поставки', '', {
        клиенты: belongsTo('i-i-s-probadesyat-клиенты', '', {
          наимЗаказчика: attr('Заказчик', { index: 2 }),
          телефон: attr('Телефон', { index: 3 }),
          адресПоставки: attr('Адрес поставки', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'номерДокРаспр' }),
    статусЗаказа: attr('Статус заказа', { index: 5 }),
    наличДеф: attr('Наличие дефектов', { index: 6 }),
    удовлКлиента: attr('Удовлетворенность клиента', { index: 7 })
  });

  modelClass.defineProjection('ФормирРезПосL', 'i-i-s-probadesyat-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    формирРаспр: belongsTo('i-i-s-probadesyat-формир-распр', 'Номер документа распределения', {
      номерДокРаспр: attr('Номер документа распределения', { index: 1 })
    }, { index: -1, hidden: true }),
    статусЗаказа: attr('Статус заказа', { index: 2 }),
    наличДеф: attr('Наличие дефектов', { index: 3 }),
    удовлКлиента: attr('Удовлетворенность клиента', { index: 4 })
  });
};
