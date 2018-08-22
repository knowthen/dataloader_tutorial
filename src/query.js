import { Pool } from 'pg';
import humps from 'humps';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  database: 'hackerbook',
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

function logQuery(sql, params) {
  console.log('BEGIN-------------------------------------');
  console.log('SQL:', sql);
  console.log('PARAMS:', JSON.stringify(params));
  console.log('END---------------------------------------');
}

export default async function query(sql, params) {
  logQuery(sql, params);
  const client = await pool.connect();
  try {
    const result = await client.query(sql, params);
    const rows = humps.camelizeKeys(result.rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
}
