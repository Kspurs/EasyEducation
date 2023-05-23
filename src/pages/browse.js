import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
import {Paper} from '@mui/material';
import { Box } from '@mui/material';
import {Pagination} from '@mui/material';
import { useState } from 'react';
import { navigate } from 'gatsby';
const Courselink = ({ coursename, coursestate }) => {
    return (
        <Paper elevation={4} sx={{textAlign:'center'}}><Button href='/liveroom' variant="text" sx={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>{coursename}</Button></Paper>
    )
}
const CourseBrowser = () => {
    React.useEffect(()=>{
        if(localStorage.length==0)
    {
        navigate('/login')
    }
    })

    const courses = [[{ name: "advanced-math", state: "live" },{name:"C Language", state: "live" },{name:"Discrete Math",state:"not live"},{ name: "Politics", state: "live" },{name:"English Writing",state:"not live"}],[{name:"English Writing",state:"not live"}]]
    const [currentpage,setPage]= useState(0);
    console.log(localStorage.getItem("id"))
    return (
        <Box sx={{backgroundColor:grey[100],height:'750px'}}>
            <Grid container rowSpacing={5} sx={{}}>
                <Grid item xs={12}>
                    <ResponsiveAppBar></ResponsiveAppBar>
                </Grid>
                <Grid item container xs={3} rowSpacing={5} sx={{}}>
                    <Grid item xs={12} sx={{paddingLeft:'70px'}}>
                        <Typography sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'black',
                            textDecoration: 'none',
                        }}>
                            Recommended Course
                        </Typography>
                    </Grid>
                    {courses.at(currentpage).map(
                        (course) => (
                            <Grid item xs={12} sx={{paddingLeft:'40px',paddingRight:'60px'}}><Courselink coursename={course.name} coursestate={course.state}></Courselink></Grid>
                        )
                    )}
                </Grid>
                <Grid item container xs={9}>
                    {courses.at(currentpage).map(
                        (course) => (
                            <Grid item xs={4}><MediaCard coursename={course.name} coursestate={course.state}></MediaCard></Grid>
                        )
                    )}
                    <Pagination count={10} color="primary" sx={{position:'absolute',top:'650px',left:'750px'}} onChange={(event,page)=>setPage(page-1)}/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default CourseBrowser