import * as React from 'react';
import {Box} from '@mui/material'
import {Avatar} from '@mui/material'
import {Typography} from '@mui/material'
const Chatmessage=({username,text})=>{
    return (
        <Box sx={{display:'block'}}>
            <Typography display='block' sx={{overflowWrap:'anywhere'}} gutterBottom>{username}:{text}</Typography>
        </Box>
    )
}
export default Chatmessage