import { Schema, model } from "mongoose";
const doctor=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'department'
    }  

},
{timestamps:true})
export default model('doctor',doctor)