import { pool } from "./db.js";

export const find = async ()=>{
    const QUERY = "SELECT * FROM tasks";
    try {
        const task = await pool.getConnection();
        const result = await task.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Not Found all records", error);
        throw error;
    }
} 

export const findById = async (id)=>{
    const QUERY = "SELECT * FROM tasks WHERE id = ?";
    try {
        const task = await pool.getConnection();
        const result = await task.query(QUERY,[id]);
        return result[0];
    } catch (error) {
        console.log("Not Found By Id records", error);
        throw error;
    }
} 

export const create = async (title, description)=>{
    const QUERY = `INSERT INTO tasks (title, description) VALUES (?,?)`;
    try {
        const task = await pool.getConnection();
        const result = await task.query(QUERY,[title, description]);
        return result[0];
    } catch (error) {
        console.log("Error ocuur when create", error);
        throw error;
    }
} 

export const update = async (status, id)=>{
    const QUERY = `UPDATE tasks SET status = ? WHERE id = ? `;
    try {
        const task = await pool.getConnection();
        const result = await task.query(QUERY,[status, id]);
        return result;
    } catch (error) {
        console.log("Can not Update", error);
        throw error;
    }
}

export const deleteById = async (id)=>{
    const QUERY = `DELETE FROM tasks WHERE id = ?`;
    try {
        const task = await pool.getConnection();
        const result = await task.query(QUERY,[id]);
        return result[0];
    } catch (error) {
        console.log("Can not Delete", error);
        throw error;
    }
}