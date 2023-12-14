import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: 'i-i-s-probadesyat-клиенты-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-probadesyat-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-probadesyat-клиенты-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документы.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документы.title'),
            children: [{
              link: 'i-i-s-probadesyat-формир-рез-пос-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadesyat-формир-рез-пос-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadesyat-формир-рез-пос-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-probadesyat-формир-распр-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadesyat-формир-распр-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadesyat-формир-распр-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-probadesyat-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadesyat-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadesyat-докум-поставки-l.title'),
              icon: 'calendar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-probadesyat-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-организация-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-probadesyat-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-список-барж-l.title'),
              children: null
            }, {
              link: 'i-i-s-probadesyat-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-список-контей-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-probadesyat-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadesyat-пункт-погрузки-l.title'),
              icon: 'folder',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-probadesyat-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-probadesyat-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-probadesyat-товары-l.title'),
              icon: 'phone',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})