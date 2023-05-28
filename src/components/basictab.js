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
function HomeworkPanel(props) {
  const { children, value, index, ...other } = props;
  const homeworks=[{name:'homework1',date:'2023-5-4',state:0},{name:'homework2',date:'2023-5-4',state:1},{name:'homework3',date:'2023-5-4',state:0}]
  const files=[{name:'Chapter1.pptx',date:'2023-5-4',state:0},{name:'Chapter2.pptx',date:'2023-5-4',state:1},{name:'Chapter3.mp4',date:'2023-5-4',state:0}]
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
                <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Homework</Typography>
                <Divider></Divider>
                {homeworks.map(
                  (hwk)=>(
                    <div>
                    <Stack direction="row" gap="20%" paddingBottom="10px" paddingTop="10px">
                      <Link>{hwk.name}</Link>
                      <Typography>{hwk.date}</Typography>
                      {
                          hwk.state===0&&(<ErrorOutlineTwoToneIcon color={grey[200]}></ErrorOutlineTwoToneIcon>)
                      }
                      {
                          hwk.state===1&&(<CheckTwoToneIcon color={green[200]}></CheckTwoToneIcon>)
                      }
                    </Stack>
                    <Divider></Divider>
                    </div>
                  )
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{pr:'10%',pl:'10%'}} elevation={4}>
                <Typography sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Files</Typography>
                <Divider></Divider>
                {files.map(
                  (hwk)=>(
                    <div>
                    <Stack direction="row" gap="20%" paddingBottom="10px" paddingTop="10px">
                      <Link>{hwk.name}</Link>
                      <Typography>{hwk.date}</Typography>
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
              <Typography align='center' sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '30px' }}>Assignment Submission Status</Typography>
              <Divider></Divider>
              
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

export default function BasicTabs({ courseintro, teacherintro }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' ,height:'100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Course Introduction" {...a11yProps(0)} />
          <Tab label="Course Resources" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} courseintro={courseintro} teacherintro={teacherintro}>
      </TabPanel>
      <HomeworkPanel value={value} index={1} homeworklst={["Homework1", "Homework2", "Homework3"]}>

      </HomeworkPanel>
    </Box>
  );
}