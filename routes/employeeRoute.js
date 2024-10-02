const express = require("express")
const route=express.Router();
const EmpContoller=require("../controllers/employeeController")   

route.get("/info" ,EmpContoller.empInfo )
route.post("/save" , EmpContoller.empSave)     
route.get("/display" , EmpContoller.empdisplay)
route.post("/search" , EmpContoller.empSearch) //data send (post se hi data send)
route.post("/searchBoth" , EmpContoller.empSearchBoth)



module.exports=route;