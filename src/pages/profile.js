import * as React from 'react';
import { useState } from 'react';
import { Paper, Stack, Typography, TextField, Button,Box } from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
const Profilepage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSaveClick = () => {
    alert('修改成功')
  };

  return (
    <Box>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Paper elevation={4} sx={{ mt: '10%', ml: '30%', mr: '30%', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
      <Stack>
        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Profile</Typography>
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Username</Typography>
        <TextField variant='outlined' value={localStorage.getItem('username')} onChange={handleUsernameChange} />
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Password</Typography>
        <TextField variant='outlined' value={password} onChange={handlePasswordChange} />
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Email</Typography>
        <TextField variant='outlined' value={email} onChange={handleEmailChange} />
        <Button sx={{ mt: '5%' }} variant='contained' onClick={handleSaveClick}>Save</Button>
      </Stack>
    </Paper>
    </Box>
  );
};

export default Profilepage;
