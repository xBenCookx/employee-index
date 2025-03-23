import { Client } from 'pg';

// Database configuration
const db = new Client({
    host: 'localhost',
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Establish connection to the database
db.connect()
    .then(() => console.log('Connected to the database successfully.'))
    .catch(error => {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    });

export default db;
