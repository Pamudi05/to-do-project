import { create, deleteById, find, findById, update } from "../db/queries.js"

export const getAllTasks = async (req,res)=>{
    try {
        const tasks = await find();
        return res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error Occur"})
    }
}

export const getTask = async (req,res)=>{
    const {id} = req.params;

    if(!id){
        return res.status(403).json({message: "ID Required"})
    }

    try {
        const task = await findById(id);
        return res.status(200).json({task});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error Occur"})
    }
}

export const createTask = async (req,res)=>{
    const { title, description} = req.body

    if(!title || !description){
        return res.status(403).json({message: "Title & Description Required"})
    }

    try {
        const task = await create(title, description);
        return res.status(201).json({task})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error Occur"})
    }
}

export const updateTask = async (req,res)=>{
    const {id} = req.params;
    const { status }= req.body;

    if(!id){
        return res.status(403).json({message: "ID Required"})
    }

    try {
        const task = await update(status, id);
        return res.status(200).json({task});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error Occur"})
    }
}

export const deleteTask = async (req,res)=>{
    const {id} = req.params;

    if(!id){
        return res.status(403).json({message: "ID Required"})
    }

    try {
        const task = await deleteById(id);
        return res.status(200).json({task});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error Occur"})
    }
}



