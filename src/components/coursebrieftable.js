import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { async } from '@babel/runtime/helpers/regeneratorRuntime';
import { addUser,deleteUser } from '../api/api';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function CoursebriefTable({rows}) {
    const [addusrname,setaddusrname]=React.useState("")
    const [addpwd,setaddpwd]=React.useState("")
    const [addrole,setaddrole]=React.useState("")
    const [addemail,setaddemail]=React.useState("")
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >课程名称</TableCell>
            <TableCell >上课次数</TableCell>
            <TableCell >上课时长min</TableCell>
            <TableCell >出勤率%</TableCell>
            <TableCell>任课教师</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{row[0]}</TableCell>
              <TableCell >{row[1]}</TableCell>
              <TableCell >{row[2]}</TableCell>
              <TableCell>{row[3]}</TableCell>
              <TableCell>{row[4]}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}