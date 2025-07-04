export default () => ({
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '4000', 10),

  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/nimbropro',
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'fallback-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },

  auth: {
    secret: process.env.AUTH_SECRET || 'fallback-auth-secret',
  },

  oauth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    linkedin: {
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    },
  },

  frontend: {
    url: process.env.FRONTEND_URL || 'http://localhost:3000',
  },
});
