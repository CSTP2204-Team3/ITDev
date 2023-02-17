import Head from 'next/head'
import Image from 'next/image'

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const stylingData = [
  {
    "id": 1,
    "img": "/hairspecialist1.jpg",
    "name": "Olivia",
    "speciality": "Styling",
    "rating": "3"
  },
  {
    "id": 2,
    "img": "/hairspecialist2.jpg",
    "name": "Emma",
    "speciality": "Styling",
    "rating": "4"
  },
  {
    "id": 3,
    "img": "/hairspecialist3.jpg",
    "name": "Charlotte",
    "speciality": "Styling",
    "rating": "3"
  },
  {
    "id": 4,
    "img": "/hairspecialist4.jpg",
    "name": "Amelia",
    "speciality": "Styling",
    "rating": "4"
  },
  {
    "id": 5,
    "img": "/hairspecialist5.jpg",
    "name": "Ava",
    "speciality": "Styling",
    "rating": "4"
  },  
  {
    "id": 6,
    "img": "/hairspecialist6.jpg",
    "name": "Sophia",
    "speciality": "Styling",
    "rating": "3"
  }        
]


const colourData = [
  {
    "id": 1,
    "img": "/hairspecialist7.jpg",
    "name": "Isabella",
    "speciality": "Colour",
    "rating": "3"
  },
  {
    "id": 2,
    "img": "/hairspecialist8.jpg",
    "name": "Mia",
    "speciality": "Colour",
    "rating": "3"
  },
  {
    "id": 3,
    "img": "/hairspecialist9.jpg",
    "name": "Evelyn",
    "speciality": "Colour",
    "rating": "4"
  },
  {
    "id": 4,
    "img": "/hairspecialist10.jpg",
    "name": "Harper",
    "speciality": "Colour",
    "rating": "4"
  },
  {
    "id": 5,
    "img": "/hairspecialist11.jpg",
    "name": "Luna",
    "speciality": "Colour",
    "rating": "3"
  },  
  {
    "id": 6,
    "img": "/hairspecialist12.jpg",
    "name": "Camila",
    "speciality": "Colour",
    "rating": "4"
  }        
]


const cutsData = [
  {
    "id": 1,
    "img": "/hairspecialist13.jpg",
    "name": "Gianna",
    "speciality": "Cuts",
    "rating": "4"
  },
  {
    "id": 2,
    "img": "/hairspecialist14.jpg",
    "name": "Elizabeth",
    "speciality": "Cuts",
    "rating": "3"
  },
  {
    "id": 3,
    "img": "/hairspecialist15.jpg",
    "name": "Eleanor",
    "speciality": "Cuts",
    "rating": "4"
  },
  {
    "id": 4,
    "img": "/hairspecialist16.jpg",
    "name": "Ella",
    "speciality": "Cuts",
    "rating": "3"
  },
  {
    "id": 5,
    "img": "/hairspecialist17.jpg",
    "name": "Abigail",
    "speciality": "Cuts",
    "rating": "3"
  },  
  {
    "id": 6,
    "img": "/hairspecialist18.jpg",
    "name": "Sofia",
    "speciality": "Cuts",
    "rating": "4"
  }        
]



export default function Home() {
  return (
    <>          

      <Head>
        <title>vExpert</title>
        <meta name="description" content="vExpert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      
      <main>         

      <h1 className="mt-6 text-3xl font-bold tracking-tight">
        HAIR SPECIALISTS
      </h1>
      
      <br></br>

      <h2 className="mt-6 text-2xl font-bold tracking-tight">
        Styling
      </h2>

      

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 24 }}>  
        
        {stylingData && stylingData.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
              <Image
                width={200}
                height={100}
                src={stylingData[index].img}
                alt={stylingData[index].name}
              />
              {stylingData[index].name}<br/>
              {stylingData[index].speciality}<br/>
              {stylingData[index].rating}
            </Item>
          </Grid>          
        ))}  
        
      </Grid>
      </Box>



    <br></br>
    <h2 className="mt-6 text-2xl font-bold tracking-tight">
      Colour
    </h2>
    
      
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 24 }}>  
        
        {colourData && colourData.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
              <Image
                width={200}
                height={100}
                src={colourData[index].img}
                alt={colourData[index].name}
              />
              {colourData[index].name}<br/>
              {colourData[index].speciality}<br/>
              {colourData[index].rating}
            </Item>
          </Grid>          
        ))}  
        
      </Grid>
    </Box> 



    <br></br>
    <h2 className="mt-6 text-2xl font-bold tracking-tight">
      Cuts
    </h2>
      
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 24 }}>  
        
        {cutsData && cutsData.map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
              <Image
                width={200}
                height={100}
                src={cutsData[index].img}
                alt={cutsData[index].name}
              />
              {cutsData[index].name}<br/>
              {cutsData[index].speciality}<br/>
              {cutsData[index].rating}
            </Item>
          </Grid>          
        ))}  
        
      </Grid>
    </Box>     

    </main>



    </>
  )
}

