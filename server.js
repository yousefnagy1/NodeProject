import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from 'dotenv';
// import subjectRouter from './routes/subjects.js'
import departmentRouter from "./routes/departments.js";
import methodOverride from "method-override"
dotenv.config();
mongoose.connect(process.env.mongooconnect)

const app=express();
app.use(express.urlencoded({extended:true}))
app.engine('handlebars',engine()); 
app.set('view engine','handlebars');
app.set('views','./templetes');
 

 

// app.use("/subject",subjectRouter)
app.use("/department",departmentRouter)
app.use(methodOverride('_method'))


 
 


app.listen(process.env.port,()=>{
    console.log(`started app on port ${process.env.port}`)  
  }) 