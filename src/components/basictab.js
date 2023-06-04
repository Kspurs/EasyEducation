import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Divider } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { grey } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Stack } from '@mui/material/';
import { Link } from '@mui/material/';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';
import { PieChart } from '@mui/icons-material';
import CourseselectTable from './courseselecttable';
import { useState } from 'react';
import { async } from '@babel/runtime/helpers/regeneratorRuntime';
import { download, getallfiles, upload } from '../api/api';
import { useEffect } from 'react';

function TabPanel(props) {
  const { children, value, index, courseintro, teacherintro, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{height:'max-content'}}
    >
      {value === index && (
        <Box sx={{ pl: "10%",pr:'10%' ,pt:'5%',height:'100%'}}>
          <Grid container columnSpacing={8}>
            <Grid item container xs={8} rowSpacing={4}>
              <Grid item xs={12}>
                <Paper sx={{pr:'10%',pl:'10%',minHeight:'400px'}} elevation={4} >
                  <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Introduction</Typography>
                  <Divider></Divider>
                  <Typography>{courseintro}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{pr:'10%',pl:'10%',minHeight:'400px'}} elevation={4}>
                  <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Professor</Typography>
                  <Divider></Divider>
                  <Typography>{teacherintro}</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid item container xs={4} rowSpacing={2}>
              <Grid item xs={12}>
              <Paper elevation={4}>
                <Typography align='center' sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Schdule</Typography>
                <Divider></Divider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
function TabPanel1(props) {
  const { children, value, index, courseintro, teacherintro, ...other } = props;
  const rows=[['admin',3,10,100,3]]
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{height:'max-content'}}
    >
      {value === index && (
        <Box sx={{ pl: "10%",pr:'10%' ,pt:'5%',height:'100%'}}>
          <CourseselectTable rows={rows}></CourseselectTable>
        </Box>
      )}
    </div>
  );
}
function HomeworkPanel(props) {
  const {coursename, children, value, index, ...other } = props;
  const [file,setfile]=useState(null)
  const [filelst,setfilelst]=useState([])
  const func=async()=>{
    const res=await getallfiles(coursename)
    setfilelst(res.data)
  }
  useEffect(()=>{
    func()
  },[])
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{height:"100%"}}
    >
      {value === index &&  (
        <Box sx={{ pl: "10%",pr:'10%' ,pt:'5%',height:'100%'}}>
        <Grid container columnSpacing={8}>
          <Grid item container xs={8} rowSpacing={4}>
            <Grid item xs={12}>
              <Paper sx={{pr:'10%',pl:'10%'}} elevation={4}>
                <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Files</Typography>
                <Divider></Divider>
                {filelst.map(
                  (hwk)=>(
                    <div>
                    <Stack direction="row" gap="20%" paddingBottom="10px" paddingTop="10px">
                      <Link>{hwk}</Link>
        
                      <Button onClick={async()=>{
                        const res=await download(hwk,coursename)
                        res.blob().then((blob)=>{
                          const url=window.URL.createObjectURL(blob)
                          const a=document.createElement('a')
                          a.href=url
                          a.download=hwk
                          a.click()
                        }
                        )
                      }}>下载</Button>
                    </Stack>
                    <Divider></Divider>
                    </div>
                  )
                )}
              </Paper>
            </Grid>
          </Grid>
          <Grid item container xs={4} rowSpacing={2}>
            <Grid item xs={12}>
            <Paper elevation={4}>
            <h1>上传资源</h1>
            {localStorage.getItem('role')==='teacher'&&(
              <form onSubmit={(e)=>{
                e.preventDefault()
                const formData=new FormData()
                formData.append('file',file)
                const res=upload(formData)
                alert('上传成功')
              }} encType="multipart/form-data"><input type='file' name='file' onChange={(event)=>{
              setfile(event.target.files[0])
              console.log(file)
            }}></input><input type='submit' value={'上传'}></input></form>)}
              
            </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      )}
    </div>
  );
}
HomeworkPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ courseintro, teacherintro,coursename }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' ,height:'100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="课程介绍" {...a11yProps(0)} />
          <Tab label="课程资源" {...a11yProps(1)} />
          <Tab label='选课名单' {...a11yProps(2)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} courseintro={courseintro} teacherintro={teacherintro}>
      </TabPanel>
      <HomeworkPanel value={value} index={1} coursename={coursename}>

      </HomeworkPanel>
      <TabPanel1 value={value} index={2}></TabPanel1>
    </Box>
  );
}