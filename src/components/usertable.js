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



export default function BasicTable({rows}) {
    const [addusrname,setaddusrname]=React.useState("")
    const [addpwd,setaddpwd]=React.useState("")
    const [addrole,setaddrole]=React.useState("")
    const [addemail,setaddemail]=React.useState("")
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >用户名</TableCell>
            <TableCell >密码</TableCell>
            <TableCell >角色</TableCell>
            <TableCell >邮箱</TableCell>
            <TableCell>操作</TableCell>
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
              <TableCell>
              <Button onClick={async()=>{
                 const res=await deleteUser(row[0])
                 alert("删除成功")
              }}>删除</Button> 
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell><TextField onChange={(event)=>{
                setaddusrname(event.target.value)
            }}></TextField></TableCell>
            <TableCell><TextField onChange={(event)=>{
                setaddpwd(event.target.value)
            }}></TextField></TableCell>
            <TableCell><TextField onChange={(event)=>{
                setaddrole(event.target.value)
            }}></TextField></TableCell>
            <TableCell><TextField onChange={(event)=>{
                setaddemail(event.target.value)
            }}></TextField></TableCell>
            <TableCell><Button onClick={async()=>{
                const res=await addUser(addusrname,addpwd,addrole,addemail)
                alert("添加成功")
            }}>添加</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}