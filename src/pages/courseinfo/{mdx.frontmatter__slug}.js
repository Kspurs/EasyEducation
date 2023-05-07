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
  let featuredImg1 = getImage(data.mdx.frontmatter.featuredImage1?.childImageSharp?.gatsbyImageData)
  let featuredImg2 = getImage(data.mdx.frontmatter.featuredImage2?.childImageSharp?.gatsbyImageData)
  console.log(data.mdx.frontmatter)
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{marginTop:'30px'}}>
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
        <BasicTabs img1={featuredImg1} img2={featuredImg2}>{children}</BasicTabs>
      </Box>
    </div>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        featuredImage1{
          childrenImageSharp{
            gatsbyImageData(width: 800)
          }
        }
        featuredImage2{
          childrenImageSharp{
            gatsbyImageData(width: 800)
          }
        }
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
export default CourseInfo