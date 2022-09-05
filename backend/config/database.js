const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env("DATABASE_HOST", 'localhost'),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", 'my-shop'),
      user: env("DATABASE_USERNAME", 'postgres'),
      password: env("DATABASE_PASSWORD", 'postgres'),
      schema: env("DATABASE_SCHEMA", 'public'), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      // },
    },
    debug: false,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'https://databases.000webhost.com/'),
//       port: env.int('DATABASE_PORT', 21),
//       database: env('DATABASE_NAME', 'id19442501_myshop'),
//       user: env('DATABASE_USERNAME', 'id19442501_id18568003_anmol'),
//       password: env('DATABASE_PASSWORD', '~cS|/&\7Gfl[k@[('),
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });
 

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
