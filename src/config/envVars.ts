import env from 'dotenv'

env.config()

export default {
  nodeEnv: (process.env.NODE_ENV ?? 'production'),
  port: Number(process.env.PORT ?? 0),
  dbName: (process.env.DB_NAME ?? ''),
  dbUser: (process.env.DB_USER ?? ''),
  dbHost: (process.env.DB_HOST ?? ''),
  dbPass: (process.env.DB_PASSWORD ?? ''),
  dbport: Number(process.env.DB_PORT ?? 0)
} as const;
