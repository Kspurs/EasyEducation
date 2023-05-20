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
import { BarChart } from 'react-native-chart-kit';
const Mycourse = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return (
        <main style={{ height: '100%', marginBottom: '0 ' }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box display='flex' flexDirection={"row"} minHeight={'800px'
            } bgcolor={grey[100]}>
                <Box flexGrow={0} display={'flex'} flexBasis={'300px'} flexDirection={'column'} pt={'20px'}>
                    <Paper sx={{ height: '100%', pl: "30px", pr: "30px" }} elevation={4}>
                    </Paper>
                </Box>
                <Box flexGrow={1} display={'flex'} pl="30px" pr="30px" pt="20px" flexDirection={'column'}>
                    <BarChart
                        data={data}
                        width={400}
                        height={220}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    />
                </Box>
                <Box flexGrow={1} display={'flex'} pl="30px" pr="30px" flexDirection={'column'}>
                    qeqweq
                </Box>
            </Box>
        </main>
    )
}
export default Mycourse