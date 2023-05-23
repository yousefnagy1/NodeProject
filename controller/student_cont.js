import department from "../database/department.js"
import student from "../database/student.js"
import subject from "../database/student.js"
export const index=async(req,res)=>{
    const stud=await student.find({},{username:1}).lean()
    res.render("student/index",{student:stud})
    // console.log(subj)
}
export const create=async(req,res)=>{
    const departments=await department.find().lean()
    // console.log(departments)
   res.render("student/create",{departments})
}
export const store=async(req,res)=>{
    const{username,password,accademicNumber,department}=req.body
   await student.create({username,password,accademicNumber,department})
    // console.log(code)
    res.redirect("/student")
}


export const show=async(req,res)=>{
    // const _id=req.params._id
    const {_id}=req.params
    // console.log(_id)
    const singlestudent= await student.findById(_id).lean()
    // console.log(singlesubject)
    res.render('student/show',{student:singlestudent})

}
export const edit=async(req,res)=>{
    const {_id}=req.params
    const student_edit=await student.findById(_id).lean()
    const departments=await department.find().lean()
    // console.log(departments)
   res.render("student/edit",{departments,student:student_edit})
}
export const update= async(req,res)=>{
    const{username,password,department,accademicNumber}=req.body
    const {_id}=req.params;
    await student.findByIdAndUpdate(_id,{$set:
        
        {username, password, department,accademicNumber},})
    res.redirect('/student')    
}
export const deleteOne=async(req,res)=>{
    const {_id}=req.params;
    await student.findByIdAndDelete(_id)
    res.redirect('/student') 
} 