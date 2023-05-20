import { async } from "@babel/runtime/helpers/regeneratorRuntime"

const url="http://localhost:3000"
const call=async(url,method,data)=>{
    const res=await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,
        body:JSON.stringify(data),

    })
    return await res.json();
}
const login=(usrname,pswd)=>{
    const data=call(url+"/login","POST",{username:usrname,password:pswd})
    return data;
}
export {login}