import {
  defineNamespace,
  defineProjections,
  Model as ИнфОЗаказеMixin
} from '../mixins/regenerated/models/i-i-s-probadesyat-инф-о-заказе';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфОЗаказеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
