const express = require('express');
const app=express();

app.use(urlencoded({ extended: true }));


import { students, addStudent } from './student.js';

import { mentors, addMentor } from "./mentor.js";

import { assign_mentor_student } from "./studentMentor.js";

app.get('/',(req,res)=>{
    res.json(data);
})

app.post('/create-student',(req,res)=>{
students.push(req.body);
res.status(200).json({message:"student created succesfully"})
})
//post request to update the database for adding new mentor
app.post('/mentors/add',(req,res)=>{
    let body=req.body;
    addMentor(body.name,body.subject,body.email);
    res.status(200).redirect('/mentors');
    
})



app.listen(4000,()=>{
    console.log("Server Started");
})