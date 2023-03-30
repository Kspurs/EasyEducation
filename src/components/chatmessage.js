import * as React from 'react';
import {Box} from '@mui/material'
import {Avatar} from '@mui/material'
import {Typography} from '@mui/material'
import { purple } from '@mui/material/colors';
import {Paper} from '@mui/material';
const Chatmessage=({username,text})=>{
    return (
        <Box sx={{display:'block'}}>
            <Typography display='block' sx={{overflowWrap:'anywhere'}} gutterBottom>{username}</Typography>
            <Paper sx={{bgcolor:purple[500]}}>
                <Typography sx={{color:'white'}}>{text}</Typography>
            </Paper>
        </Box>
    )
}
export default Chatmessage