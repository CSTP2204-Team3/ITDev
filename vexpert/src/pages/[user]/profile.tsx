import Cloudinary from "components/profile/Cloudinary";
import Introduction from "components/profile/Introduction";
import Picture from "components/profile/Picture";
import React from "react";

export default function profile() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Professional Profile</h1>
                <div className="flex flex-row">
                    <p>Page</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
