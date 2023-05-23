import { async } from "@babel/runtime/helpers/regeneratorRuntime"

const url = "http://localhost:3000"
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

const createcourse = (coursename, description, courseteacher, courseweekday, coursestarttime, coursemax) => {
    const res =  call(
        url + "/createcourse", 'POST', { coursename: coursename, description: description, courseteacher: courseteacher, courseweekday: courseweekday, coursestarttime: coursestarttime, coursemax: coursemax }
    )
    return res;
}
export { login, createcourse }