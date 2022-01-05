module.exports = {
  app: {
    env: process.env.NODE_ENV,
    get isProduction() {
      return this.env === 'production'
    },
    get isDevelopment() {
      return this.env === 'production'
    },
    indexFile: `${ process.cwd() }/public/index.html`,
    staticPath: `${ process.cwd() }/public`
  },
  api: {
    path: `${ process.cwd() }/api`
  },
  cors: {
    allowedOrigins: ['localhost:8080', 'app.localhost:8080'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Accept', 'Accept-Language', 'Authorization', 'Content-Type'],
    get corsOptions() {
      return {
        origin: this.allowedOrigins,
        methods: this.allowedMethods,
        allowedHeaders: this.allowedHeaders,
        optionsSuccessStatus: 204
      }
    }
  }
}
