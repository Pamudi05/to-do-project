import {createPool} from 'mysql2/promise';
import {config } from 'dotenv';

config();

const pool = createPool({
    port: process.env.MYSQL_PORT ,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.DB_HOST,
    database:process.env.DB_NAME,
    user: process.env.DB_USER
});

const connectToDatabase = async()=>{
    try {
        await pool.getConnection();
        console.log("MySql Connected")
    } catch (error) {
        console.log("Database Connection Error")
        console.error(error);
        throw error;
    }
}

export { connectToDatabase, pool};