import { async } from "@babel/runtime/helpers/regeneratorRuntime"
const url = "http://localhost:3000"
const cloudName="dkehsqtv6"
const api_key="341428297654848"
const call = async (url, method, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
        ,
        body: JSON.stringify(data),

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
    const data=call(url+'/getSelectedCourse','GET',{usrname:usrname})
    return data
}
const createcourse = (coursename, description, courseteacher, courseweekday, coursestarttime, coursemax) => {
    const res =  call(
        url + "/createcourse", 'POST', { coursename: coursename, description: description, courseteacher: courseteacher, courseweekday: courseweekday, coursestarttime: coursestarttime, coursemax: coursemax }
    )
    return res;
}
const getteachercourses = (teacherid) => {
    const res = call(url + "/getteachercourses", "GET", { teacherid: teacherid })
    return res;
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
export {addCourse,getSelectedCourse, uploadfile,login, createcourse ,getteachercourses}