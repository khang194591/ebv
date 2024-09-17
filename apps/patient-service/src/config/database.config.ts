import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  host: process.env.PATIENT_DB_HOST || 'localhost',
  port: process.env.PATIENT_DB_PORT || 5432,
  username: process.env.PATIENT_DB_USERNAME || 'postgres',
  password: process.env.PATIENT_DB_PASSWORD || 'password',
  database: process.env.PATIENT_DB_DATABASE || 'ebv',
}));
