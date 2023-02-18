import Cloudinary from "@/Components/Prof.Profile/Cloudinary";
import BaseInfo from "@/Components/Prof.Profile/BaseInfo";
import React from "react";
import { Button, Container } from "@mui/material";
const professional = {
  avatar:
    "https://cdnph.upi.com/ph/st/th/4731670873231/2022/upi/f1be93041eb357ef457f08af370e8125/v1.2/RuPauls-Drag-Race-expands-to-Brazil-Germany-Mexico.jpg?lg=5&=1",
  name: "RuPaul Andre",
  introduction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sequi eveniet nulla fugiat quaerat in labore non provident totam, minima placeat voluptatum officia ducimus temporibus fuga quos sint blanditiis eos.",
  specialties: ["Haircut", "Drawing"],
  rating: 4.5
};

const data = [
  {
    category: "Thief",
    image:
      "https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/1-the-ivy-league-mens-cut.jpg?resize=500%2C592",
    title: "Bank Robbery",
    occupation: "Painter",
    description: "I am a painter"
  },

  {
    category: "hello",
    image:
      "https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/1-the-ivy-league-mens-cut.jpg?resize=500%2C592",
    title: "hello!",
    occupation: "Coder",
    description: "I am a painter"
  },
  {
    category: "Yeet!",
    image:
      "https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/1-the-ivy-league-mens-cut.jpg?resize=500%2C592",
    title: "hello!",
    occupation: "Painter",
    description: "I am a painter"
  },
  {
    category: "hello",
    image:
      "https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/1-the-ivy-league-mens-cut.jpg?resize=500%2C592",
    title: "hello!",
    occupation: "Thief",
    description: "I am a painter"
  }
];

export default function profile() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Container maxWidth="lg bg-sky-500">
          <h1 className="text-2xl font-bold md:text-4xl font-bold">
            Professional Profile
          </h1>
          <div className="bg-white m-6 p-3 rounded-md ">
            <div className="">
              <BaseInfo props={professional} />
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              {data.map((item) => {
                return (
                  <>
                    <Cloudinary props={item} />
                  </>
                );
              })}
              <input
                accept="image/*"
                className={""}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
