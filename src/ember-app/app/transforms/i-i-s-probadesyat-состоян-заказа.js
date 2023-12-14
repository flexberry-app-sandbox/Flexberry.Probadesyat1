import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянЗаказаEnum from '../enums/i-i-s-probadesyat-состоян-заказа';

export default FlexberryEnum.extend({
  enum: СостоянЗаказаEnum,
  sourceType: 'IIS.Probadesyat.СостоянЗаказа'
});
