import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДогов: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-probadesyat-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-probadesyat-организация', { inverse: null, async: false }),
  инфОЗаказе: DS.hasMany('i-i-s-probadesyat-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadesyat-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДогов: {
    descriptionKey: 'models.i-i-s-probadesyat-докум-поставки.validations.номерДогов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-probadesyat-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-probadesyat-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфОЗаказе: {
    descriptionKey: 'models.i-i-s-probadesyat-докум-поставки.validations.инфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-probadesyat-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДогов: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-probadesyat-организация', 'Организация', {
      наимОрганиз: attr('Наименование организации', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимОрганиз' }),
    клиенты: belongsTo('i-i-s-probadesyat-клиенты', 'Клиенты', {
      наимЗаказчика: attr('Заказчик', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наимЗаказчика' }),
    инфОЗаказе: hasMany('i-i-s-probadesyat-инф-о-заказе', 'Информация о заказе', {
      товары: belongsTo('i-i-s-probadesyat-товары', 'Товары', {
        наимТовара: attr('Наименование товара', { index: 1, hidden: true }),
        производит: attr('Производитель', { index: 3 }),
        единицыИзм: attr('Единицы измерения', { index: 4 }),
        цена: attr('Цена', { index: 5 }),
        масса: attr('Масса', { index: 6 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-probadesyat-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДогов: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-probadesyat-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-probadesyat-клиенты', 'Заказчик', {
      наимЗаказчика: attr('Заказчик', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
