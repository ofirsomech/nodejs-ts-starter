import { DataSource } from 'typeorm';
import { Example } from './src/modules/example/models/exampleModel';


export const createDataSource = (): DataSource => {
  const appDataSource = new DataSource({
    type: 'mssql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '1433', 10),
    username: process.env.DB_USERNAME || 'sa',
    password: process.env.DB_PASSWORD || 'SQLConnect1',
    database: process.env.DB_DATABASE || 'testDB',
    synchronize: true,
    entities: [Example],
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  });

  appDataSource.initialize()
    .then(() => console.log('Data Source has been initialized!'))
    .catch((err) => console.error('Error during Data Source initialization:', err));

  return appDataSource;
};