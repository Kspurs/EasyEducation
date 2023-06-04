import React from "react";
import { getalluser,addUser,deleteUser } from "../api/api";
import { Box, Button, Paper, Stack } from "@mui/material";
import { getSelectedCourse ,addCourse} from "../api/api";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";
import { Link, navigate } from "gatsby";
import ResponsiveAppBar from "../components/appbar";
import BasicTable from "../components/usertable";
const Usermanage=()=>{
    const [alluser,setAlluser]=React.useState([])
    const func=async()=>{
        const res=await getalluser()
        const tmparr=[]
        res.data.forEach(element => {
            tmparr.push(element)
        });
        setAlluser(tmparr)
    }
    React.useEffect(()=>{
        func()
    },[])
    console.log(alluser)
    return(
        <Box>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Paper elevation={4} sx={{mt:'5px',ml:'10%',mr:'10%',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
            <h1>人员管理</h1>
            <BasicTable rows={alluser}></BasicTable>
        </Paper>
        </Box>
    )
}
export default Usermanage