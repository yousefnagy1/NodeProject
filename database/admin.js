import { Schema, model } from "mongoose";
const admin=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
  

},
{timestamps:true})
export default model('admin',admin)