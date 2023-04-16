import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { AppBar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import BasicTabs from '../components/basictab';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import {purple} from '@mui/material/colors';
import {Box} from '@mui/material';
const CourseInfo=()=>{
    const coursebrief="This is a brief introduction to the course"
    const teacherbrief="This is a brief introduction to the teacher"
    return(
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box>
            <Typography sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: purple[500],
              textDecoration: 'none',
            }}>Advanced Math</Typography>
            <Button variant='contained' onClick={()=>{
                const ffmpeg = createFFmpeg({ log: true });
                (async () => {
                    
                    await ffmpeg.load();
                    await ffmpeg.run('-f','x11grab','-framerate','10','-i', 'desktop', '-vcodec','libx264','-f','flv','rtmp://127.0.0.1:1935/myapp/mystream');
                  })();
            }}>Open Liveroom</Button>
            <BasicTabs coursebrief={coursebrief} teacherbrief={teacherbrief} courseid={1}></BasicTabs>

        </Box>
        </div>
    )
}
export default CourseInfo