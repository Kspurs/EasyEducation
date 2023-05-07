import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
function TabPanel(props) {
  const { children, value, index, img1,img2,...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{display:'inline-block'}}>{children}</Typography>
          <Box sx={{display:'inline-block'}}>
            <GatsbyImage image={img1}></GatsbyImage>
            <GatsbyImage image={img2}></GatsbyImage>
          </Box>
        </Box>
      )}
    </div>
  );
}
function HomeworkPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && props.homeworklst.map((hwk)=>(
        <Box sx={{ p: 3 ,border:'solid 3px',borderRadius:'5px',paddingLeft:'50px',marginBottom:'30px',marginTop:'10px',marginLeft:'100px',marginRight:'100px'}}>
          <Typography sx={{display:'inline',fontFamily:'monospace',fontSize:'30px'}}>{hwk}</Typography>
          <Button variant='contained' sx={{display:'inline',marginLeft:'100px'}}>Submit</Button>
        </Box>
      ))}
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

export default function BasicTabs({children,img1,img2}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Course Introduction" {...a11yProps(0)} />
          <Tab label="Course Resources" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} img1={img1} img2={img2}>
      {children}
      </TabPanel>
      <HomeworkPanel value={value} index={1} homeworklst={["Homework1","Homework2","Homework3"]}>

      </HomeworkPanel>
    </Box>
  );
}