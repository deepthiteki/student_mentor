let students=[{
name:"deepthi",
subject:"math",
email:"deep@gmail.com",
mentor:""

}];
let addStudent=(name,subject,email)=>{
    students[`${name}`]={
        subject,
        email,
        mentor:""
    }
}

module.exports={students,addStudent}