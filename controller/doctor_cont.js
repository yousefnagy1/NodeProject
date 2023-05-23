import department from "../database/department.js"
import doctor from "../database/doctor.js"
export const index=async(req,res)=>{
    const doct=await doctor.find({},{username:1}).lean()
    res.render("doctor/index",{doctor:doct})
    // console.log(subj)
}
export const create=async(req,res)=>{
    const departments=await department.find().lean()
    // console.log(departments)
   res.render("doctor/create",{departments})
}
export const store=async(req,res)=>{
    const{username,password,department}=req.body
   await doctor.create({username,password,department})
    // console.log(code)
    res.redirect("/doctor")
}


export const show=async(req,res)=>{
    // const _id=req.params._id
    const {_id}=req.params
    // console.log(_id)
    const singledoctor= await doctor.findById(_id).lean()
    // console.log(singlesubject)
    res.render('doctor/show',{doctor:singledoctor})

}
export const edit=async(req,res)=>{
    const {_id}=req.params
    const doctor_edit=await doctor.findById(_id).lean()
    const departments=await department.find().lean()
    // console.log(departments)
   res.render("doctor/edit",{departments,doctor:doctor_edit})
}
export const update= async(req,res)=>{
    const{username,password,department}=req.body
    const {_id}=req.params;
    await doctor.findByIdAndUpdate(_id,{$set:
        
        {username, password, department},})
    res.redirect('/doctor')    
}
export const deleteOne=async(req,res)=>{
    const {_id}=req.params;
    await doctor.findByIdAndDelete(_id)
    res.redirect('/doctor') 
} 