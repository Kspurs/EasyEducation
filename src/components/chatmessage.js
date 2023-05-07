import * as React from 'react';
import {Box} from '@mui/material'
import {Avatar} from '@mui/material'
import {Typography} from '@mui/material'
import { purple } from '@mui/material/colors';
import {Paper} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Padding } from '@mui/icons-material';
const Chatmessage=({username,text})=>{
    return (
        <Box sx={{display:"flex",borderRadius:'5px',marginLeft:'10px',marginRight:'10px',marginTop:'10px',bgcolor:grey[300],paddingTop:'5px',paddingLeft:'5px'}}>
            <Avatar src='../images/icon.png'  sx={{width:"20px",height:"20px",marginTop:'5px',marginRight:'5px'}}></Avatar>
            <Typography  sx={{overflowWrap:'anywhere'}} gutterBottom>{`${username}:${text}`}</Typography>
        </Box>
    )
}
export default Chatmessage