'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/buzz-dev'
  },
  google: {
    clientID:     process.env.GOOGLE_ID || '603893921534-0o32f4ro0ta602rv14b3228pqdn3kfm0.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'QABruF0j8RtCyKkpGGBUFQ-Q',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
  },
  seedDB: true
};
