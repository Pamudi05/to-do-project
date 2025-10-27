import express from 'express';
import appRouter from './router/router.js';
import { connectToDatabase } from './db/db.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use('/api/v1/tasks/', appRouter)

const PORT = process.env.PORT || 5000;

connectToDatabase().then(()=>{
    app.listen(PORT, ()=> console.log(`Server PORT ${PORT}`));
}).catch(err => {
    console.log("Error occur in MySql connection , " , err);
    process.exit(0);
})
