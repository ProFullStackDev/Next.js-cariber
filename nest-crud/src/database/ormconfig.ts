import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

import { PROD_ENV } from '../constants'
const AdminUser = require('nestjs-admin').AdminUserEntity

const config = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
}

// FOR GOOGLE CLOUD SQL
if (
  process.env.INSTANCE_CONNECTION_NAME &&
  process.env.NODE_ENV === PROD_ENV
) {
  config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
}

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'nest',
  ssl: process.env.NODE_ENV === PROD_ENV
    ? { rejectUnauthorized: false }
    : false,
  entities: [
    join(__dirname, '../models/*{.ts,.js}'),
    AdminUser
  ],
  // We are using migrations, synchronize should be set to false.
  synchronize: true,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
  migrations: [
    join(__dirname, 'migrations/*{.ts,.js}')
  ],
  cli: {
    migrationsDir: 'src/database/migrations'
  }
}

export = connectionOptions
