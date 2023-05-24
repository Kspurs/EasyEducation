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
const liveserver = "http://localhost:9001/demos"
const CourseInfo = ({ props, children,data }) => {
  const courseid='1'
  const userid=localStorage.getItem('id')
  const coursebrief = "This is a brief introduction to the course"
  const teacherbrief = "This is a brief introduction to the teacher"
  console.log(data.mdx.frontmatter)
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
          
        }}>Advanced Math</Typography>
        <Button sx={{display:'inline',marginLeft:'50px'}} variant='contained' href={`${liveserver}/dashboard/canvas-designer.html?open=true&sessionid=${courseid}&publicRoomIdentifier=dashboard&userFullName=${userid}`} onClick={() => {
          navigate(`${liveserver}/dashboard/canvas-designer.html?open=true&sessionid=${courseid}&publicRoomIdentifier=dashboard&userFullName=${userid}`)
        }}>Open Liveroom</Button>
        <Button sx={{display:'inline',marginLeft:'50px'}} variant='contained' href={`${liveserver}/dashboard/canvas-designer.html?open=false&sessionid=${courseid}&publicRoomIdentifier=dashboard&userFullName=${userid}`} onClick={() => {
          navigate(`${liveserver}/dashboard/canvas-designer.html?open=true&sessionid=${courseid}&publicRoomIdentifier=dashboard&userFullName=${userid}`)
        }}>Join Liveroom</Button>
        <SimpleDialogDemo></SimpleDialogDemo>
        <BasicTabs courseintro={data.mdx.frontmatter.courseintro} teacherintro={data.mdx.frontmatter.teacherintro}></BasicTabs>
      </Box>
    </div>
  )
}

export default CourseInfo