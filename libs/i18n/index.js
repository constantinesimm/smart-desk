const i18n = require('i18n');
const { join } = require('path');

i18n.configure({
  locales: ['en', 'ru', 'uk'],
  defaultLocale: 'en',
  directory: join(__dirname, '/locales'),
  header: 'Accept-Language',
  register: global,
});

module.exports = i18n;
