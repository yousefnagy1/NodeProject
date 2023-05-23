import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import subjectRouter from './routes/subjects.js'
import departmentRouter from "./routes/departments.js";
import doctorrouter from "./routes/doctor.js";
import studentrouter from "./routes/student.js"
import adminrouter from "./routes/admin.js"
import methodOverride from "method-override"
dotenv.config();
mongoose.connect(process.env.mongooconnect)

const app=express();
app.use(express.urlencoded({extended:true}))
app.engine('handlebars',engine()); 
app.set('view engine','handlebars');
app.set('views','./templetes');
 

 
app.use("/admin",adminrouter)
app.use("/subject",subjectRouter)
app.use("/department",departmentRouter)
app.use("/doctor",doctorrouter)
app.use("/student",studentrouter)


app.use(methodOverride('_method'))


 
 


app.listen(process.env.port,()=>{
    console.log(`started app on port ${process.env.port}`)  
  }) 