const { i18n } = require('../libs');

module.exports = app => {
  app.use((req, res, next) => {
    let locale = req.headers['accept-language'];

    if (!locale) locale = 'en';
    else locale = locale.toLowerCase().split('-').shift();

    i18n.setLocale(locale);

    return next();
  }).use(i18n.init);
}
