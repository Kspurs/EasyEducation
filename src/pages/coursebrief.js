import React from "react";
import { getalluser,addUser,deleteUser } from "../api/api";
import { Box, Button, Paper, Stack } from "@mui/material";
import { getSelectedCourse ,addCourse} from "../api/api";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";
import { Link, navigate } from "gatsby";
import ResponsiveAppBar from "../components/appbar";
import BasicTable from "../components/usertable";
import CoursebriefTable from "../components/coursebrieftable";
const Coursebrief=()=>{
    const rows=[['高等数学',10,3,100,'adminteacher'],['线性代数',10,3,100,'adminteacher'],['大学英语',10,3,100,'adminteacher']]
    return (<Box>
        <ResponsiveAppBar>

        </ResponsiveAppBar>
        <CoursebriefTable rows={rows}></CoursebriefTable>
    </Box>)
}
export default Coursebrief