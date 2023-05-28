import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
import { Paper } from '@mui/material';
import { Box } from '@mui/material';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { async } from '@babel/runtime/helpers/regeneratorRuntime';
import { getAllcourses } from '../api/api';
import { set } from 'lodash';
const Courselink = ({ coursename, coursestate }) => {
    return (
        <Paper elevation={4} sx={{ textAlign: 'center' }}><Button href='/liveroom' variant="text" sx={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>{coursename}</Button></Paper>
    )
}
const CourseBrowser = () => {
    const livingcourse = ['高等数学']
    const [allcourses, setallcourses] = useState([])
    React.useEffect(async () => {
        const res = await getAllcourses()
        console.log(res)
        const tmparr = []
        res.data.forEach(element => {
            tmparr.push(element[0])
        });
        console.log(tmparr)
        setallcourses(tmparr)
    },[])
    return (
        <Box>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box display={'flex'} ml='10%' mr='10%' mt='10px'>
                <Box display={'flex'} flexGrow={2} flexDirection={'column'} mr='20px'>
                    <Paper elevation={4} sx={{pl:'10%',pr:'10%'}}>
                        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>课程列表</Typography>
                        
                        {allcourses.map((course) => {
                            return (
                                <MediaCard coursename={course}></MediaCard>
                            )
                        })}
                    </Paper>
                    <Paper sx={{mt:'10px',pl:'10%',pr:'10%'}} elevation={4}>
                        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>正在直播</Typography>
                        {livingcourse.map((course) => {
                            return (
                                <MediaCard coursename={course}></MediaCard>
                            )
                        })}
                    </Paper>
                </Box>
                <Box flexGrow={1} display={'flex'} flexDirection={'column'}>
                    <Paper elevation={4} sx={{pl:'10%',pr:'10%',minHeight:'500px'}}>
                        <Typography sx={{textAlign:'center',fontFamily:'monospace',fontWeight:700}}>欢迎来到EasyEducation</Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
export default CourseBrowser