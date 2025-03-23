import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

// Database connection configuration
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432,
});

// Function to establish a database connection
const connectToDatabase = async (): Promise<void> => {
    try {
        await pool.connect();
        console.log('Successfully connected to the database.');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

export { pool, connectToDatabase };
