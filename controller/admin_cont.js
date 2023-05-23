import department from "../database/department.js"
import doctor from "../database/admin.js"
import admin from "../database/admin.js"
export const index=async(req,res)=>{
    const adm=await admin.find({},{username:1}).lean()
    res.render("admin/index",{admin:adm})
    // console.log(subj)
}
export const create=async(req,res)=>{
    // console.log(departments)
   res.render("admin/create")
}
export const store=async(req,res)=>{
    const{username,password}=req.body
   await admin.create({username,password})
    // console.log(code)
    res.redirect("/admin")
}


export const show=async(req,res)=>{
    // const _id=req.params._id
    const {_id}=req.params
    // console.log(_id)
    const singleadmin= await doctor.findById(_id).lean()
    // console.log(singlesubject)
    res.render('admin/show',{admin:singleadmin})

}
export const edit=async(req,res)=>{
    const {_id}=req.params
    const admin_edit=await admin.findById(_id).lean()
    
    // console.log(departments)
   res.render("admin/edit",{admin:admin_edit})
}
export const update= async(req,res)=>{
    const{username,password}=req.body
    const {_id}=req.params;
    await admin.findByIdAndUpdate(_id,{$set:
        
        {username, password},})
    res.redirect('/admin')    
}
export const deleteOne=async(req,res)=>{
    const {_id}=req.params;
    await admin.findByIdAndDelete(_id)
    res.redirect('/admin') 
} 