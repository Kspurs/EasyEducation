import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey } from '@mui/material/colors';
import EnhancedTable from '../components/coursetable';
const Mycourse=()=>{
    return (
        <main>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box sx={{marginLeft:'15%',marginRight:'15%',pt:'20px'}}>
            <EnhancedTable></EnhancedTable>
                
            </Box>
        </main>
    )
}
export default Mycourse