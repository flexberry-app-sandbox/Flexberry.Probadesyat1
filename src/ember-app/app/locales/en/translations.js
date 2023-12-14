import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbadesyatДокумПоставкиLForm from './forms/i-i-s-probadesyat-докум-поставки-l';
import IISProbadesyatКлиентыLForm from './forms/i-i-s-probadesyat-клиенты-l';
import IISProbadesyatОрганизацияLForm from './forms/i-i-s-probadesyat-организация-l';
import IISProbadesyatПунктПогрузкиLForm from './forms/i-i-s-probadesyat-пункт-погрузки-l';
import IISProbadesyatСписокБаржLForm from './forms/i-i-s-probadesyat-список-барж-l';
import IISProbadesyatСписокКонтейLForm from './forms/i-i-s-probadesyat-список-контей-l';
import IISProbadesyatТоварыLForm from './forms/i-i-s-probadesyat-товары-l';
import IISProbadesyatФормирРаспрLForm from './forms/i-i-s-probadesyat-формир-распр-l';
import IISProbadesyatФормирРезПосLForm from './forms/i-i-s-probadesyat-формир-рез-пос-l';
import IISProbadesyatДокумПоставкиEForm from './forms/i-i-s-probadesyat-докум-поставки-e';
import IISProbadesyatКлиентыEForm from './forms/i-i-s-probadesyat-клиенты-e';
import IISProbadesyatОрганизацияEForm from './forms/i-i-s-probadesyat-организация-e';
import IISProbadesyatПунктПогрузкиEForm from './forms/i-i-s-probadesyat-пункт-погрузки-e';
import IISProbadesyatСписокБаржEForm from './forms/i-i-s-probadesyat-список-барж-e';
import IISProbadesyatСписокКонтейEForm from './forms/i-i-s-probadesyat-список-контей-e';
import IISProbadesyatТоварыEForm from './forms/i-i-s-probadesyat-товары-e';
import IISProbadesyatФормирРаспрEForm from './forms/i-i-s-probadesyat-формир-распр-e';
import IISProbadesyatФормирРезПосEForm from './forms/i-i-s-probadesyat-формир-рез-пос-e';
import IISProbadesyatДокумПоставкиModel from './models/i-i-s-probadesyat-докум-поставки';
import IISProbadesyatИнфОЗаказеModel from './models/i-i-s-probadesyat-инф-о-заказе';
import IISProbadesyatКлиентыModel from './models/i-i-s-probadesyat-клиенты';
import IISProbadesyatОрганизацияModel from './models/i-i-s-probadesyat-организация';
import IISProbadesyatПунктПогрузкиModel from './models/i-i-s-probadesyat-пункт-погрузки';
import IISProbadesyatСписокБаржModel from './models/i-i-s-probadesyat-список-барж';
import IISProbadesyatСписокКонтейModel from './models/i-i-s-probadesyat-список-контей';
import IISProbadesyatТоварыModel from './models/i-i-s-probadesyat-товары';
import IISProbadesyatФормирРаспрModel from './models/i-i-s-probadesyat-формир-распр';
import IISProbadesyatФормирРезПосModel from './models/i-i-s-probadesyat-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probadesyat-докум-поставки': IISProbadesyatДокумПоставкиModel,
    'i-i-s-probadesyat-инф-о-заказе': IISProbadesyatИнфОЗаказеModel,
    'i-i-s-probadesyat-клиенты': IISProbadesyatКлиентыModel,
    'i-i-s-probadesyat-организация': IISProbadesyatОрганизацияModel,
    'i-i-s-probadesyat-пункт-погрузки': IISProbadesyatПунктПогрузкиModel,
    'i-i-s-probadesyat-список-барж': IISProbadesyatСписокБаржModel,
    'i-i-s-probadesyat-список-контей': IISProbadesyatСписокКонтейModel,
    'i-i-s-probadesyat-товары': IISProbadesyatТоварыModel,
    'i-i-s-probadesyat-формир-распр': IISProbadesyatФормирРаспрModel,
    'i-i-s-probadesyat-формир-рез-пос': IISProbadesyatФормирРезПосModel
  },

  'application-name': 'Probadesyat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probadesyat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probadesyat',
          title: 'Probadesyat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          'i-i-s-probadesyat-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probadesyat-формир-рез-пос-l': {
              caption: 'Формирование результата поставки',
              title: 'Формир рез пос'
            },
            'i-i-s-probadesyat-формир-распр-l': {
              caption: 'Формирование документа распределения',
              title: 'Формир распр'
            },
            'i-i-s-probadesyat-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            }
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
            'i-i-s-probadesyat-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-probadesyat-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-probadesyat-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-probadesyat-пункт-погрузки-l': {
              caption: 'Пункт погрузки',
              title: 'Пункт погрузки'
            }
          },
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-probadesyat-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probadesyat-докум-поставки-l': IISProbadesyatДокумПоставкиLForm,
    'i-i-s-probadesyat-клиенты-l': IISProbadesyatКлиентыLForm,
    'i-i-s-probadesyat-организация-l': IISProbadesyatОрганизацияLForm,
    'i-i-s-probadesyat-пункт-погрузки-l': IISProbadesyatПунктПогрузкиLForm,
    'i-i-s-probadesyat-список-барж-l': IISProbadesyatСписокБаржLForm,
    'i-i-s-probadesyat-список-контей-l': IISProbadesyatСписокКонтейLForm,
    'i-i-s-probadesyat-товары-l': IISProbadesyatТоварыLForm,
    'i-i-s-probadesyat-формир-распр-l': IISProbadesyatФормирРаспрLForm,
    'i-i-s-probadesyat-формир-рез-пос-l': IISProbadesyatФормирРезПосLForm,
    'i-i-s-probadesyat-докум-поставки-e': IISProbadesyatДокумПоставкиEForm,
    'i-i-s-probadesyat-клиенты-e': IISProbadesyatКлиентыEForm,
    'i-i-s-probadesyat-организация-e': IISProbadesyatОрганизацияEForm,
    'i-i-s-probadesyat-пункт-погрузки-e': IISProbadesyatПунктПогрузкиEForm,
    'i-i-s-probadesyat-список-барж-e': IISProbadesyatСписокБаржEForm,
    'i-i-s-probadesyat-список-контей-e': IISProbadesyatСписокКонтейEForm,
    'i-i-s-probadesyat-товары-e': IISProbadesyatТоварыEForm,
    'i-i-s-probadesyat-формир-распр-e': IISProbadesyatФормирРаспрEForm,
    'i-i-s-probadesyat-формир-рез-пос-e': IISProbadesyatФормирРезПосEForm
  },

});

export default translations;
