// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user: 'joaopjk',
    password: 'joaopjk'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
