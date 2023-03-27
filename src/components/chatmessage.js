import * as React from 'react';
import {Box} from '@mui/material'
import {Avatar} from '@mui/material'
import {Typography} from '@mui/material'
const Chatmessage=({username,text})=>{
    return (
        <Box sx={{display:'block'}}>
            <Avatar src="/src/images/icon.png" sx={{width:24,height:24}}></Avatar>
            <Typography display='block' sx={{overflowWrap:'anywhere'}} gutterBottom>{username}:{text}</Typography>
        </Box>
    )
}
export default Chatmessage