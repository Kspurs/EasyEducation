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
import SimpleDialogDemo from '../components/liveroomuserdialog';
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
export const isBrowser = () => typeof window !== "undefined"
const onlinepeople=50
const messages = [{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" },{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" }]
const Liveroom = ({ url }) => {
    const CourseName="Advancd Math"
    const TeacherName="MR.Li"
    const [msgstatus, setmsgstatus] = useState([])
    const ref = useRef(0)
    var ws=new WebSocket("ws://localhost:8081")
    if(!isBrowser)
    {
        return null;
    }
    return (
        <Grid container >
            <Grid item xs={12}><ResponsiveAppBar></ResponsiveAppBar></Grid>
            <Grid item container xs={9}>
                <Grid item xs={12} sx={{paddingTop:'30px',paddingRight:'30px'}}>
                <Playvideo></Playvideo>
                </Grid>
                <Grid item xs={12} sx={{paddingRight:'30px'}}>
                <Box sx={{display:'flex',bgcolor:purple[200]}}>
                <Avatar src='../images/icon.png' sx={{width:'50px',height:'50px',mr:'50px'}}></Avatar>
                <Typography sx={{fontFamily:'monospace',fontSize:'40px',fontWeight:700,pb:'50px'}}>Welcome to My Course Living Room</Typography>
                <Box sx={{ml:'100px',mr:'100px',display:'inline-block'}}>
                <PeopleIcon sx={{marginLeft:'10px',marginRight:'10px',width:'50px',height:'50px'}}></PeopleIcon>
                <Typography sx={{display:'inline',fontFamily:'monospace',fontSize:'30px',fontWeight:700}}>{onlinepeople}</Typography>
                
                </Box>
            </Box>
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
                    <SimpleDialogDemo ></SimpleDialogDemo>
                </ThemeProvider>
            </Grid>
        </Grid>
    )
}
export default Liveroom