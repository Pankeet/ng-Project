const { Router } = require("express");
const mongoose = require('mongoose');
const { StudentModel } = require('../config/db');
const studentForm = Router();

studentForm.post('/submit', async function(req, res){
    const user = req.body;
    let a=await StudentModel.findOne({email:user.email});
    let b=await StudentModel.findOne({phone:user.phone});

    if(a)
    {
        return res.status(400).json({
            success:false,
            message:"Email already exists"
        })
    }

    if(b)
    {
        return res.status(400).json({
            success:false,
            message:"Phone number already exists"
        })
    }
    try{
    await StudentModel.create({
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        password: user.password,
        phone: user.phone,
        dob : user.age 
    })
    
        res.json({
            message : "User Detailed Recorded Successfully"
        })
    }


    catch(e){
        console.log(e);
        res.status(404).json({
            message : "Somthing went in Parthism",
         })
    }
});

module.exports = {
    studentForm : studentForm
};


   
