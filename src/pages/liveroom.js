import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Link } from 'gatsby'
import { Avatar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Playvideo from '../components/video';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Chatmessage from '../components/chatmessage';
import { width } from '@mui/system';
import { useState } from 'react';
import { useRef } from 'react';
import PeopleIcon from '@mui/icons-material/People';
const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: purple[500],
            contrastText: '#fff',
        },
    },
});
const onlinepeople=50
const messages = [{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" }]
const Liveroom = ({ url }) => {
    const CourseName="Advancd Math"
    const TeacherName="MR.Li"
    const [msgstatus, setmsgstatus] = useState([])
    const ref = useRef(0)
    var ws=new WebSocket("ws://localhost:8081")
    return (
        <Grid container >
            <Grid item xs={12}><ResponsiveAppBar></ResponsiveAppBar></Grid>
            <Grid item container xs={9}>
                <Grid item xs={12} sx={{paddingTop:'30px',paddingBottom:'30px',paddingRight:'30px',height:''}}>
                <Playvideo></Playvideo>
                </Grid>
            </Grid>
            <Grid item xs={3} >
                <Typography sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize:'20px',
                    color: 'black',
                    textDecoration: 'none',
                    marginLeft:'130px',
                    marginTop:'30px'
                }}>Chat Room</Typography>
                <Box sx={{overflow:'scroll',height: 500,border:'2px solid',borderRadius:'5px'}}>
                    {messages.map((msg)=>
                        (<Chatmessage key={msg.user} username={msg.user} text={msg.text}></Chatmessage>)
                    )}
                </Box>
                <TextField  inputRef={ref} fullWidth defaultValue='Send Message' id="text" sx={{marginTop:'30px',marginBottom:'20px'}}/>
                <ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained" onClick={()=>{
                        ws.send(ref.current.value)
                    }}>
                        Send
                    </Button>
                </ThemeProvider>
            </Grid>
            <Box sx={{display:'flex'}}>
                <Avatar src='../images/icon.png' sx={{width:'50px',height:'50px',mr:'50px'}}></Avatar>
                <Typography sx={{fontFamily:'monospace',fontSize:'20px',fontWeight:700}}>Welcome to My Course Living Room</Typography>
                <Box sx={{ml:'100px'}}>
                <PeopleIcon sx={{marginLeft:'10px',marginRight:'10px'}}></PeopleIcon>
                {onlinepeople}
                </Box>
                
            </Box>
        </Grid>
    )
}
export default Liveroom