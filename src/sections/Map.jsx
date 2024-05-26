import React from "react";
import CustomGlobe from "../components/Globe";

export default function Map() {
  return (
    <div className="flex flex-col gap-10 text-center items-center">
      <h1 className="text-2xl md:text-4xl font-bold">
        OUR SERVERS ARE PRESENT ALL ACROSS THE ASIA
      </h1>
      <div className="-mt-44 md:mt-0">
        <CustomGlobe />
      </div>
    </div>
  );
}
