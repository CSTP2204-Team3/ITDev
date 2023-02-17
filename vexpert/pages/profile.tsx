import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TopNav from '@/Components/TopNav/topNav';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfileCom from '@/Components/profileCom'



export default function Profile() {
  return (
    <>    

    <div className="background">

      <TopNav/>

      <ProfileCom />

    </div>

  </>        
  );   
}