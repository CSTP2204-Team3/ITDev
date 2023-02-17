import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// theme
const theme = createTheme({
    palette: {      
      neutral: {
        main: '#F76C6C',
        contrastText: '#FFFFFF',
      },
    },
  });
  
  declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
      neutral?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {      
      neutral: true;
    }
  }


let email = "xxxxx@google.com"  


export default function Profile() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <>    

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >         
           
          <Typography component="h1" variant="h4">
            Profile
          </Typography>

          <div className="profileBox">
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />            

            <Typography variant="h6" padding="20px">
                {email}
            </Typography>                   
          
          </Box>

          </div>

          <Button
              style={{backgroundColor: "#F76C6C"}}
              type="submit"                   
              color="neutral"              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
          </Button>

        </Box>
        
      </Container>
      </ThemeProvider>

  </>        
  );   
}