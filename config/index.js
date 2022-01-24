require('dotenv').config();

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
  client: {
    baseUrl: process.env.VUE_APP_URL
  },
  cors: {
    allowedOrigins: [
      'http://localhost:8080',
      'http://app.localhost:8080',
      'https://localhost:8080',
      'https://app.localhost:8080'
    ],
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
  },
  database: {
    mongo: {
      uri: process.env.MONGODB_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    },
    postgresql: process.env.POSTGRESQL_URL
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  },
  secretKeys: {
    pass: process.env.PASS_HASH_KEY,
    token: process.env.TOKEN_HASH_KEY
  },
  vendors: {
    googleClientId: process.env.VUE_APP_GOOGLE_CLIENT_ID
  }
}
