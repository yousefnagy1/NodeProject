
import department from "../database/department.js";
export const index=async(req,res)=>{
    const dept= await department.find({},{name:1}).lean()
    res.render('departments/index',{department:dept})
    // console.log(dept)

}
export const create=async(req,res)=>{
    res.render("departments/create")
 }


 export const store=async(req,res)=>{
    const{name,code}=req.body
   await department.create({name,code})
    // console.log(code)
    res.redirect("/department")
} 

export const show=async(req,res)=>{
    // const _id=req.params._id
    const {_id}=req.params
    // console.log(_id)
    const singledepart= await department.findById(_id).lean()
    // console.log(singlesubject)
    res.render('departments/show',{department:singledepart})
    

}

export const edit=async(req,res)=>{
    const {_id}=req.params
    const depart_edit=await department.findById(_id).lean()
   
    // console.log(departments)
   res.render("departments/edit",{department:depart_edit})
}
export const update=async(req,res)=>{
    const {_id}=req.params;
    const{name,code}=req.body
    await department.findByIdAndUpdate(_id,{$set:
        
        {name, code},})
    res.redirect('/department') 
} 


export const deleteOne=async(req,res)=>{
    const {_id}=req.params;
    await department.findByIdAndDelete(_id)
    res.redirect('/department') 
} 