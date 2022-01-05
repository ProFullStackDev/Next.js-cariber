module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env("DATABASE_PORT", "5432"),
      database: env("DATABASE_NAME", "cariber"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
    },
    useNullAsDefault: true,
  },
});
