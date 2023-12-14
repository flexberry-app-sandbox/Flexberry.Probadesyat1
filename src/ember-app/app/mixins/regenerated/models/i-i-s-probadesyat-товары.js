import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицыИзм: DS.attr('i-i-s-probadesyat-ед-изм'),
  масса: DS.attr('number'),
  наимТовара: DS.attr('string'),
  производит: DS.attr('string'),
  цена: DS.attr('number')
});

export let ValidationRules = {
  единицыИзм: {
    descriptionKey: 'models.i-i-s-probadesyat-товары.validations.единицыИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  масса: {
    descriptionKey: 'models.i-i-s-probadesyat-товары.validations.масса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимТовара: {
    descriptionKey: 'models.i-i-s-probadesyat-товары.validations.наимТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производит: {
    descriptionKey: 'models.i-i-s-probadesyat-товары.validations.производит.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-probadesyat-товары.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-probadesyat-товары', {
    наимТовара: attr('Наим товара', { index: 0 }),
    производит: attr('Производит', { index: 1 }),
    единицыИзм: attr('Единицы изм', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    масса: attr('Масса', { index: 4 })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-probadesyat-товары', {
    наимТовара: attr('Наим товара', { index: 0 }),
    производит: attr('Производит', { index: 1 }),
    единицыИзм: attr('Единицы изм', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    масса: attr('Масса', { index: 4 })
  });
};
