import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Stack, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { green, grey } from '@mui/material/colors';
import { Paper } from '@mui/material';
import { Box,Autocomplete } from '@mui/material';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { Barchart } from '../components/barchart';
import { Piechart } from '../components/piechart';
import { getSelectedCourse } from '../api/api';
import { async } from '@babel/runtime/helpers/regeneratorRuntime';
import { navigate } from 'gatsby-link';
const Mycourse = () => {
    const [searchWord, setSearchWord] = useState('')
    const [selectedcourses, setSelectedCourses] = useState([])
    React.useEffect(async() => {
        const res = await getSelectedCourse(localStorage.getItem("username"));
        setSelectedCourses(res.data);
    }, [])
    return (
        <main style={{ height: '100%', marginBottom: '0 ' }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box display='flex' flexDirection={"row"} minHeight={'800px'
            } bgcolor={grey[100]}>
                <Box flexGrow={0} display={'flex'} flexBasis={'300px'} flexDirection={'column'} pt={'20px'}>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pl: "30px", pr: "30px" }} elevation={4}>
                        <Typography flexGrow={0} sx={{marginTop:'10px',marginBottom:'10px',fontFamily: 'monospace', fontWeight: 700, fontSize: '20px' }}>已选课程</Typography>
                        <Box display={'flex'} flexGrow={0} flexDirection={'column'}>
                        <Autocomplete
                            sx={{marginBottom:'10px',flexGrow:0}}
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={selectedcourses.map((option) => option)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
        
                                    label="搜索课程"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                            onChange={(event,value)=>{setSearchWord(value)}}
                            ></Autocomplete>
                        <Stack flexGrow={1} direction={'column'} spacing={'5px'} >
                        {selectedcourses.map((course) => (course==searchWord||searchWord=='')&&(
                            <Button variant='text' color='info'>{course}</Button>
                        ))}
                        </Stack>
                        <Button variant='contained' sx={{bgcolor:green[500]}} onClick={()=>navigate('/addcourse')}>添加课程</Button>
                        </Box>
                </Paper>
                </Box>
                <Box flexGrow={1} display={'flex'} pl="20px" pr="20px" pt="20px" flexDirection={'column'} >
                    <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>学习情况总览</Typography>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Paper sx={{ position: 'relative', height: '40vh', pl: '10px', pr: '10px', flexGrow: 1, flexBasis: '30vw', marginRight: '10px' }} elevation={4} >
                            <Barchart></Barchart>
                        </Paper>
                        <Paper sx={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '40vh', pl: '10px', pr: '10px', flexGrow: 1, flexBasis: '30vw' }} elevation={4} >
                            <Piechart></Piechart>
                        </Paper>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Paper sx={{ position: 'relative', height: '40vh', pl: '10px', pr: '10px', flexGrow: 1, flexBasis: '30vw', marginRight: '10px' }} elevation={4} >
                            <Barchart></Barchart>
                        </Paper>
                        <Paper sx={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '40vh', pl: '10px', pr: '10px', flexGrow: 1, flexBasis: '30vw' }} elevation={4} >
                            <Piechart></Piechart>
                        </Paper>
                    </Box>
                    
                </Box>

            </Box>
        </main>
    )
}
export default Mycourse