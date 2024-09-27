import express from "express";
import { PORT } from "./config.js";
import { mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

//middleware for parsing request body
app.use(express.json());
//middleware for handling cors policy
app.use(cors());

app.get('/',(req,res)=>{
console.log(req);
return res.status(234).send('yoyoy');
});


app.use('/books',booksRoute);
mongoose
.connect(mongoDBURL)
.then(()=> {
console.log('app connected to db');
app.listen(PORT,() => {
    console.log(`app is listening on port: ${PORT}`);
});
})
.catch(() =>{
console.log(error);
});