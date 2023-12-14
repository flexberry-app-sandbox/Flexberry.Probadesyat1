import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probadesyat-докум-поставки-l');
  this.route('i-i-s-probadesyat-докум-поставки-e',
  { path: 'i-i-s-probadesyat-докум-поставки-e/:id' });
  this.route('i-i-s-probadesyat-докум-поставки-e.new',
  { path: 'i-i-s-probadesyat-докум-поставки-e/new' });
  this.route('i-i-s-probadesyat-клиенты-l');
  this.route('i-i-s-probadesyat-клиенты-e',
  { path: 'i-i-s-probadesyat-клиенты-e/:id' });
  this.route('i-i-s-probadesyat-клиенты-e.new',
  { path: 'i-i-s-probadesyat-клиенты-e/new' });
  this.route('i-i-s-probadesyat-организация-l');
  this.route('i-i-s-probadesyat-организация-e',
  { path: 'i-i-s-probadesyat-организация-e/:id' });
  this.route('i-i-s-probadesyat-организация-e.new',
  { path: 'i-i-s-probadesyat-организация-e/new' });
  this.route('i-i-s-probadesyat-пункт-погрузки-l');
  this.route('i-i-s-probadesyat-пункт-погрузки-e',
  { path: 'i-i-s-probadesyat-пункт-погрузки-e/:id' });
  this.route('i-i-s-probadesyat-пункт-погрузки-e.new',
  { path: 'i-i-s-probadesyat-пункт-погрузки-e/new' });
  this.route('i-i-s-probadesyat-список-барж-l');
  this.route('i-i-s-probadesyat-список-барж-e',
  { path: 'i-i-s-probadesyat-список-барж-e/:id' });
  this.route('i-i-s-probadesyat-список-барж-e.new',
  { path: 'i-i-s-probadesyat-список-барж-e/new' });
  this.route('i-i-s-probadesyat-список-контей-l');
  this.route('i-i-s-probadesyat-список-контей-e',
  { path: 'i-i-s-probadesyat-список-контей-e/:id' });
  this.route('i-i-s-probadesyat-список-контей-e.new',
  { path: 'i-i-s-probadesyat-список-контей-e/new' });
  this.route('i-i-s-probadesyat-товары-l');
  this.route('i-i-s-probadesyat-товары-e',
  { path: 'i-i-s-probadesyat-товары-e/:id' });
  this.route('i-i-s-probadesyat-товары-e.new',
  { path: 'i-i-s-probadesyat-товары-e/new' });
  this.route('i-i-s-probadesyat-формир-распр-l');
  this.route('i-i-s-probadesyat-формир-распр-e',
  { path: 'i-i-s-probadesyat-формир-распр-e/:id' });
  this.route('i-i-s-probadesyat-формир-распр-e.new',
  { path: 'i-i-s-probadesyat-формир-распр-e/new' });
  this.route('i-i-s-probadesyat-формир-рез-пос-l');
  this.route('i-i-s-probadesyat-формир-рез-пос-e',
  { path: 'i-i-s-probadesyat-формир-рез-пос-e/:id' });
  this.route('i-i-s-probadesyat-формир-рез-пос-e.new',
  { path: 'i-i-s-probadesyat-формир-рез-пос-e/new' });
});

export default Router;
