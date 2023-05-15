import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
import EnhancedTable from '../components/coursetable';
import { Height } from '@mui/icons-material';
const Mycourse=()=>{
    return (
        <main style={{height:'100%',marginBottom:'0 '}}>
            
            <Box sx={{marginLeft:'15%',marginRight:'15%',pt:'20px',bgcolor:grey[200],height:'100%'}}>
            <EnhancedTable></EnhancedTable>
                
            </Box>
        </main>
    )
}
export default Mycourse