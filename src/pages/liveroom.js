import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Link } from 'gatsby'
import { Typography } from '@mui/material';
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
const messages = [{ user: 'user1', text: "hello" }, { user: 'user2', text: "How are You" }]
const Liveroom = ({ url }) => {
    const CourseName="Advancd Math"
    const TeacherName="MR.Li"
    const [msgstatus, setmsgstatus] = useState([])
    const ref = useRef(0)
    var ws=new WebSocket("ws://localhost:8081")
    ws.addEventListener("message",(e)=>{
        var msglst=msgstatus
        msglst.push(e)
        setmsgstatus(msglst)
    })
    return (
        <Grid container >
            <Grid item xs={12}><ResponsiveAppBar></ResponsiveAppBar></Grid>
            <Grid item container xs={9}>
                <Grid item xs={12}>
                
                </Grid>
                <Grid item xs={12}>
                    <Box height={100} >
                        <Typography>{CourseName}</Typography>
                        <Typography>{TeacherName}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'black',
                    textDecoration: 'none',
                }}>Chat Room</Typography>
                <Box sx={{ height: 500 }}>
                    {msgstatus.map((msg)=>{
                        <Chatmessage text={msg}></Chatmessage>
                    })}
                </Box>
                <TextField inputRef={ref} fullWidth defaultValue='Send Message' id="text" />
                <ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained" onClick={()=>{
                        ws.send(ref.current.value)
                    }}>
                        Send
                    </Button>
                </ThemeProvider>
            </Grid>
        </Grid>
    )
}
export default Liveroom