import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-probadesyat-товары', { inverse: null, async: false }),
  докумПоставки: DS.belongsTo('i-i-s-probadesyat-докум-поставки', { inverse: 'инфОЗаказе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-probadesyat-инф-о-заказе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-probadesyat-инф-о-заказе.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-probadesyat-инф-о-заказе.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфОЗаказеE', 'i-i-s-probadesyat-инф-о-заказе', {
    товары: belongsTo('i-i-s-probadesyat-товары', 'Товары', {
      наимТовара: attr('Наименование товара', { index: 1, hidden: true }),
      производит: attr('Производитель', { index: 3 }),
      единицыИзм: attr('Единицы измерения', { index: 4 }),
      цена: attr('Цена', { index: 5 }),
      масса: attr('Масса', { index: 6 })
    }, { index: 0, displayMemberPath: 'наимТовара' }),
    количество: attr('Количество', { index: 2 })
  });
};
