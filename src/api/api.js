import { async } from "@babel/runtime/helpers/regeneratorRuntime"
const url = "http://localhost:3000"
const cloudName="dkehsqtv6"
const api_key="341428297654848"
const call = async (url, method, data) => {
    const res = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
        ,
        body: JSON.stringify(data),

    })
    if(method=='GET'){
        return res
    }
    return await res.json();
}
const call2 = async (url, method, data) => {
    const res = await fetch(url, {
        method: method,
        body: data,

    })
    return await res.json();
}
const login = (usrname, pswd) => {
    const data = call(url + "/login", "POST", { username: usrname, password: pswd })
    return data;
}
const addCourse=(usrname,coursename)=>{
    const data=call(url+'/addCourse','POST',{usrname:usrname,coursename:coursename})
    return data
}
const getSelectedCourse=(usrname)=>{
    const data=call(url+'/getSelectedCourse','POST',{usrname:usrname})
    return data
}
const createcourse = (coursename, description, courseteacher, courseweekday, coursestarttime, coursemax) => {
    const res =  call(
        url + "/createcourse", 'POST', { coursename: coursename, description: description, courseteacher: courseteacher, courseweekday: courseweekday, coursestarttime: coursestarttime, coursemax: coursemax }
    )
    return res;
}
const getteachercourses = (teacherid) => {
    const res = call(url + "/getTeacherCourses", "POST", { teacherid: teacherid })
    return res;
}
const getAllcourses=()=>{
    const res=call(url+'/getAllcourses','POST')
    return res
}
const getAllLivingrooms=()=>{
    const res=call(url+'/getAllLivingrooms','POST')
    return res
}
const openLivingroom=(coursename)=>{
    console.log(coursename)
    const res=call(url+'/openLivingroom','POST',{coursename:coursename})
    return res
}
const uploadfile=(file,filename)=>{
 // Assuming you have a File object

const fileReader = new FileReader();

fileReader.onload = async function () {
  const dataURL = this.result; // The file data as a Data URL
  // Use the dataURL as needed
    const res=await call(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, "POST", {file:dataURL,upload_preset:"autoupload",public_id:filename})
    console.log(res)
};

fileReader.readAsDataURL(file);
}
const register = (usrname, pswd,role,email) => {
    const data = call(url + "/register", "POST", { usrname: usrname, pwd: pswd,role:role,email:email})
    return data;
}
const getalluser=()=>{
    const data=call(url+'/getalluser','POST',{})
    return data
}
const addUser=(usrname,pwd,role,email)=>{
    const data=call(url+'/addUser','POST',{usrname:usrname,pwd:pwd,role:role,email:email})
    return data
}
const deleteUser=(usrname)=>{
    const data=call(url+'/deleteUser','POST',{usrname:usrname})
    return data
}
const getcoursestudent=(coursename)=>{
    const data=call(url+'/getcoursestudent','POST',{coursename:coursename})
    return data
}
const upload=(formdata)=>{
    const data=call2(url+'/upload','POST',formdata)
    return data
}
const getallfiles=(coursename)=>{
    const data=call(url+'/getallfiles','POST',{coursename:coursename})
    return data
}
const download=(filename,coursename)=>{
    const data=call(url+`/download?coursename=${coursename}&filename=${filename}`,'GET')
    return data
}
export {upload,download,getallfiles,getcoursestudent,openLivingroom,getAllLivingrooms,register,getAllcourses,addCourse,getSelectedCourse, uploadfile,login, createcourse ,getteachercourses,getalluser,deleteUser,addUser}