import React from "react";
import "./style.css";
import logo from './logo.svg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1></h1>
      
      <Stack direction="column" spacing={2}>
        <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>Customer</Button>
        <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>Agent</Button>
      </Stack>
    </div>
  );
};

export default Welcome;
