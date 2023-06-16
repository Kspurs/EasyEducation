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
import { purple } from '@mui/material/colors';
import { Box } from '@mui/material';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SimpleDialogDemo from '../components/liveroomuserdialog';
import { async } from '@babel/runtime/helpers/regeneratorRuntime';
import { openLivingroom } from '../api/api';
import { cleanDigitSectionValue } from '@mui/x-date-pickers/internals/hooks/useField/useField.utils';
const liveserver = "http://localhost:9001/demos"
const CourseInfo = (props) => {
  const coursename=props.location.state.coursename
  const username=localStorage.getItem('username')
  const coursebrief = "This is a brief introduction to the course"
  const teacherbrief = "This is a brief introduction to the teacher"
  return (
    <div style={{height:'100%'}}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{marginTop:'30px',height:'100%'}}>
        <Typography sx={{
          mr: 2,
          display: 'inline',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: purple[500],
          textDecoration: 'none',
          fontSize:'50px',
          
        }}>{coursename}</Typography>
        {localStorage.getItem('role')==='teacher'&&(<Button sx={{display:'inline',marginLeft:'50px'}} variant='contained' href={`${liveserver}/dashboard/canvas-designer.html?open=true&sessionid=${coursename}&publicRoomIdentifier=dashboard&userFullName=${username}`} onClick={async() => {
            const res=await openLivingroom(coursename)
            console.log(res)
        }}>开启直播间</Button>)}
        <Button sx={{display:'inline',marginLeft:'50px'}} variant='contained' href={`${liveserver}/dashboard/canvas-designer.html?open=false&sessionid=${coursename}&publicRoomIdentifier=dashboard&userFullName=${username}`} onClick={() => {
          navigate(`${liveserver}/dashboard/canvas-designer.html?open=false&sessionid=${coursename}&publicRoomIdentifier=dashboard&userFullName=${username}`)
        }}>加入直播间</Button>
        {localStorage.getItem('role')==='teacher'&&(<SimpleDialogDemo></SimpleDialogDemo>)}
        <BasicTabs coursename={coursename} courseintro={coursebrief} teacherintro={teacherbrief}></BasicTabs>
      </Box>
    </div>
  )
}

export default CourseInfo