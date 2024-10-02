const empModel=require("../models/employeeModel")

const empInfo=(req,res)=>{
    res.send("this is employees info")
}
const empSave=(req,res)=>{
    const {eno , ename , ecity ,esalary}=req.body;

    const employee= new empModel({
        empno:eno,
        empname:ename,
        empcity:ecity,
        empsalary:esalary
    })
    employee.save();
    console.log(req.body);
    res.send("data successfully saved!!!!!!!!!!!!!!!!")
 
}
const empdisplay=async(req,res)=>{
    const empdata= await empModel.find();
    res.send(empdata);
}
const empSearch=async(req , res)=>{
    const {eno}=req.body;                                  //destructure
    const data=await empModel.find({"empno":eno});
    console.log(data);
    res.send(data);
}




module.exports={
    empInfo,
    empSave,
    empdisplay,
    empSearch
}