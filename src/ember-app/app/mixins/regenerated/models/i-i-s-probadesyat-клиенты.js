import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресПоставки: DS.attr('string'),
  наимЗаказчика: DS.attr('string'),
  расчетСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адресПоставки: {
    descriptionKey: 'models.i-i-s-probadesyat-клиенты.validations.адресПоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимЗаказчика: {
    descriptionKey: 'models.i-i-s-probadesyat-клиенты.validations.наимЗаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетСчет: {
    descriptionKey: 'models.i-i-s-probadesyat-клиенты.validations.расчетСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probadesyat-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-probadesyat-клиенты', {
    наимЗаказчика: attr('Наим заказчика', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставки: attr('Адрес поставки', { index: 2 }),
    расчетСчет: attr('Расчет счет', { index: 3 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-probadesyat-клиенты', {
    наимЗаказчика: attr('Наим заказчика', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставки: attr('Адрес поставки', { index: 2 }),
    расчетСчет: attr('Расчет счет', { index: 3 })
  });
};
