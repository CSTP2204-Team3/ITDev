import React from "react";
import BasicCard from "./BaseCard";
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Typography } from "@mui/material";



export default function Cloudinary({props}: any) {
  return (
    <Card
    sx={{
      width: 270,
      "@media (max-width: 620px)": {
        width: "100%",
      }}}
    className='m-2'>
      <CardMedia
    sx={{
      height: 160,
      "@media (max-width: 768px)": {
        height: 160,
      }}}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography gutterBottom variant="h8" component="div">
          {props.category}
        </Typography>

        <div className="">
          <Typography variant="body2" color="text.secondary" >
            Lizards are a widespread group of squa...
          </Typography>
        </div>
      </CardContent>
      <div className="flex flex-row justify-center">
        <button
          type="button"
          className="m-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Button text
        </button>
        <button
          type="button"
          className="m-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Button text
        </button>
      </div>
    </Card>
  );
}
