import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/appbar'
import { AppBar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../../components/coursecard';
import { grey } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import BasicTabs from '../../components/basictab';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { purple } from '@mui/material/colors';
import { Box } from '@mui/material';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const CourseInfo = ({ props, children,data }) => {
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
          fontSize:'50px'
        }}>Advanced Math</Typography>
        <Button sx={{display:'inline',marginLeft:'50px'}} variant='contained' onClick={() => {
          navigate('/liveroom')
        }}>Open Liveroom</Button>
        <BasicTabs courseintro={data.mdx.frontmatter.courseintro} teacherintro={data.mdx.frontmatter.teacherintro}></BasicTabs>
      </Box>
    </div>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        courseintro
        teacherintro
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
export default CourseInfo