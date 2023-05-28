import * as React from 'react';
import { useState } from 'react';
import { navigate } from 'gatsby';
import { register } from '../api/api';
import { Paper } from '@mui/material';
import { Stack, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const roleOptions = ["teacher", "student"];

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event, value) => {
    setSelectedRole(value);
  };

  const handleRegister = async () => {
    const res = await register(username, password, selectedRole, email);
    console.log(res);
    if (res.state === "success") {
      const id = res.id;
      const role = res.role;
      localStorage.setItem("id", id);
      localStorage.setItem("role", role);
      localStorage.setItem('username', username);
      navigate("/browse");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <Paper elevation={4} sx={{ mt: '10%', ml: '30%', mr: '30%', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
      <Stack>
        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Register</Typography>
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Username</Typography>
        <TextField variant='outlined' onChange={handleUsernameChange} />
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Password</Typography>
        <TextField variant='outlined' onChange={handlePasswordChange} />
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Email</Typography>
        <TextField variant='outlined' onChange={handleEmailChange} />
        <Typography sx={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: '700', color: 'black', textDecoration: 'none', mb: '5%' }}>Role</Typography>
        <Autocomplete
          options={roleOptions}
          onChange={handleRoleChange}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <Button sx={{ mt: '5%' }} variant='contained' onClick={handleRegister}>Register</Button>
      </Stack>
    </Paper>
  );
};

export default Register;

