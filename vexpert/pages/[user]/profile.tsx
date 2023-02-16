// import Cloudinary from "components/profile/Cloudinary";
// import Introduction from "components/profile/Introduction";
// import Picture from "components/profile/Picture";
import React from "react";
import ProfessionalUserPage from "@/Components/profile/professional";

export default function profile() {

  return (
    <>
      <ProfessionalUserPage userBio={""} userID={""} userName={""} userEmail={"temp@gmail.com"} userTags={[]} userPortfolio={["/duck.jpeg", "/duck.jpeg", "/duck.jpeg", "/duck.jpeg"]} userProfile={"/duck.jpeg"}  />
    </>
  );
}
