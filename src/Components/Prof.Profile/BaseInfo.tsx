import { Avatar, Button, Chip } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import React from "react";

export default function BaseInfo({ props }: any) {
  return (
    <>
      <div className="flex">
        <Avatar
          alt="Remy Sharp"
          className=""
          src={props.avatar}
          sx={{
            width: 120,
            height: 120,
            "@media (max-width: 600px)": {
              width: 60,
              height: 60,
            },
          }}
        />
        <div className="">
          <h2 className="text-2xl font-bold md:text-3xl font-boldmt-5 mb-4">{props.name}</h2>
          <h3 className="text-1xl font-bold md:text-2xl font-boldmt-5 mb-4">About me</h3>
          <p className="py-4">{props.introduction}</p>
          <div className="flex justify-center">
            <Button
              variant="contained"
              href="#"
              className="bg-rose-400 hover:bg-rose-700"
            >
              Link
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <StarIcon
          sx={{
            width: 40,
            height: 40,
            "@media (max-width: 600px)": {
              width: 30,
              height: 30,
            },
          }}
          />
          <h3 className="text-center text-2xl font-bold">{props.rating}</h3>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-1xl font-bold md:text-3xl font-boldmt-5 mb-4">Specialties</h2>
        <div className="flex flex-row">
          {props.specialties.map((skill) => {
            return (
              <>
                <a href="#">
                  <Chip
                    label={skill}
                    className="text-base rounded-lg mx-2 hover:bg-stone-400"
                    variant="outlined"
                  />
                </a>
            </>
                  );
                })}
        </div>
      </div>
    </>

  );
}
