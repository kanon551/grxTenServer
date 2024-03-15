const { Pool } = require('pg');
const dotenv = require('dotenv');
const { InternalServerError } = require('../utils/exceptions');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL ,
  })


const connectDb = async (pool) => {
        try{
            await pool.connect();
            console.log('Successfully connected to Vercel Database');
        }
        catch(err){
            console.error('connection error', err.stack);
            // process.exit(1);
        }
};

connectDb(pool);
module.exports = { pool };