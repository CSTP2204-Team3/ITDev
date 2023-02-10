import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import TopNav from '@/Components/TopNav/topNav'

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

export default function Home() {
  return (
    <>    
      <TopNav/>

      <div className="landingPage">      

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

      <Grid xs={2} sm={4} md={4}>
        <Item>
          <Image
            width={200}
            height={100}
            src="/4-brown-feathered-pixie.jpg"
            alt="70 Overwhelming Ideas for Short Choppy Haircuts"
          />
          70 Overwhelming Ideas for Short Choppy Haircuts
        </Item>              
      </Grid>

      <Grid xs={2} sm={4} md={4}>
        <Item>
          <Image
            width={200}
            height={100}
            src="/2-straight-pixie-cut-wet-look.jpg"
            alt="70 Short Shaggy, Spiky, Edgy Pixie Cuts and Hairstyles"
          />
          70 Short Shaggy, Spiky, Edgy Pixie Cuts and Hairstyles
        </Item>              
      </Grid>    

      <Grid xs={2} sm={4} md={4}>
        <Item>
          <Image
            width={200}
            height={100}
            src="/19-layered-blonde-balayage-bob.jpg"
            alt="70 Cute and Easy-To-Style Short Layered Hairstyles"
          />
          70 Cute and Easy-To-Style Short Layered Hairstyles
        </Item>              
      </Grid> 

      <Grid xs={2} sm={4} md={4}>
        <Item>
          <Image
            width={200}
            height={100}
            src="/7-caramel-blonde-layered-pixie.jpg"
            alt="50 Pixie Haircuts for Thick Hair with a Wow Effect"
          />
          50 Pixie Haircuts for Thick Hair with a Wow Effect
        </Item>              
      </Grid> 

      <Grid xs={2} sm={4} md={4}>
        <Item>
          <Image
            width={200}
            height={100}
            src="/2-layered-brown-balayage-bob.jpg"
            alt="60 Short Shag Hairstyles That You Simply Cannot Miss"
          />
          60 Short Shag Hairstyles That You Simply Cannot Miss
        </Item>              
      </Grid> 

      <Grid xs={2} sm={4} md={4}>
        <Item>
          <Image
            width={200}
            height={100}
            src="/25-pixie-bob-with-side-swept-bangs-for-thick-hair.jpg"
            alt="37 Short Straight Hairstyles for a Stylish Look"
          />
          37 Short Straight Hairstyles for a Stylish Look
        </Item>              
      </Grid>                           
         
        {/* If you use an array loop
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
              <Image
                width={200}
                height={100}
                src="/4-brown-feathered-pixie.jpg"
                alt="70 Overwhelming Ideas for Short Choppy Haircuts"
              />
              70 Overwhelming Ideas for Short Choppy Haircuts
            </Item>
          </Grid>
        ))} */}
        
      </Grid>
    </Box>



    <br></br>
    <h2 className="mt-6 text-2xl font-bold tracking-tight">
      Colour
    </h2>
    
      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 24 }}>

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/6-red-wavy-lob.jpg"
              alt="Red Hair Color"
            />
            Red Hair Color
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/7-black-hair-with-purple-and-brown-balayage.jpg"
              alt="Burgundy Hair Color"
            />
            Burgundy Hair Color
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/2-caramel-blonde-balayage-for-brunettes.jpg"
              alt="Caramel Highlights"
            />
            Caramel Highlights
          </Item>              
        </Grid>   

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/1-medium-gray-hairstyle-for-straight-hair.jpg"
              alt="Gray Hair Color"
            />
            Gray Hair Color
          </Item>              
        </Grid>  

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/2-blonde-highlights-for-brown-hair.jpg"
              alt="Brown Hair Color"
            />
            Brown Hair Color
          </Item>              
        </Grid>  

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/13-blonde-balayage-hair.jpg"
              alt="Blonde Hair"
            />
            Blonde Hair
          </Item>              
        </Grid>                                

      </Grid>
    </Box>   



    <br></br>
    <h2 className="mt-6 text-2xl font-bold tracking-tight">
      Cuts
    </h2>
      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 24 }}>

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/2-curly-funky-ash-blonde-mohawk-for-girls.jpg"
              alt="Mohawk"
            />
            Mohawk
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/1-medium-messy-waves-with-side-bang.jpg"
              alt="Haircuts with Bangs"
            />
            Haircuts with Bangs
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/1-layered-tousled-blonde-hairstyle-for-straight-hair.jpg"
              alt="Straight Haircuts"
            />
            Straight Haircuts
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/8-brown-bob-for-curly-hair.jpg"
              alt="Curly Haircuts"
            />
            Curly Haircuts
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/5-natural-mohawk-with-side-twists.jpg"
              alt="Haircuts for Natural Hair"
            />
            Haircuts for Natural Hair
          </Item>              
        </Grid> 

        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Image
              width={200}
              height={100}
              src="/3-short-layered-haircut-for-thick-hair.jpg"
              alt="Haircuts for Thick Hair"
            />
            Haircuts for Thick Hair
          </Item>              
        </Grid>                 

      </Grid>
    </Box>       

    </main>

  </div>


    </>
  )
}

