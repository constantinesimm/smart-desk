const { HttpError, validator: { ValidationError } } = require('../libs');

module.exports = app => {
  /* catch 404 and forward to error handler */
  app.use((req, res, next) => {
    console.log(req.url)
    next(new HttpError(404, `Page not found`))
  });

  /* Error handler */
  app.use((error, req, res, next) => {
    if (error instanceof ValidationError) {
      let details = [];

      Object.keys(error.details).forEach(target => error.details[target].forEach(field => details.push(field.message)));

      return res.status(422).json({ message: error.message, details });
    }

    if (error.errors) return res.status(error.status).json({ name: error.name, message: error.message, errors: error.errors })
    if (error.status) return res.status(error.status).json({ message: error.message });

    next(error);
  });
}
