import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
const Courselink = ({ coursename, coursestate }) => {
    return (
        <Button href='/liveroom' variant="text" sx={{ color: 'black', fontFamily: 'monospace', fontSize: '20px', bgcolor: grey[400] }}>{coursename}</Button>
    )
}
const CourseBrowser = () => {
    const courses = [{ name: "Advanced Math", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Operating System", state: "live" }, { name: "Datebase", state: "live" }, { name: "Data Structure", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Advanced Math", state: "live" }, { name: "Data Structure", state: "live" }]

    return (
        <main>
            <Grid container rowSpacing={5}>
                <Grid item xs={12}>
                    <ResponsiveAppBar></ResponsiveAppBar>
                </Grid>
                <Grid item container xs={3} rowSpacing={5} sx={{}}>
                    <Grid item xs={12}>
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
                    {courses.map(
                        (course) => (
                            <Grid item xs={12}><Courselink coursename={course.name} coursestate={course.state}></Courselink></Grid>
                        )
                    )}
                </Grid>
                <Grid item container xs={9}>
                    {courses.map(
                        (course) => (
                            <Grid item xs={4}><MediaCard coursename={course.name} coursestate={course.state}></MediaCard></Grid>
                        )
                    )}
                </Grid>
            </Grid>
        </main>
    )
}
export default CourseBrowser