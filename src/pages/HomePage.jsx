import React from "react";
import Hero from "../sections/Hero";
import Plans from "../sections/Plans";
import Map from "../sections/Map";
import Faq from "../sections/Faq";
import Footer from "../components/Footer";
import { BackgroundBeams } from "../components/BackgroundBeams";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center gap-36">
      <BackgroundBeams />
      <Hero />
      <Plans />
      <Map />
      <Faq />
      <div className="border-2 w-[95%] border-blue-600 py-10 mb-10 flex flex-col items-center mx-4">
        <h1 className="text-5xl text-center font-extrabold">
          JOIN OUR DISCORD SERVER
        </h1>
        <button className="bg-blue-500 px-4 py-1 text-2xl mt-4 rounded">
          Join Now
        </button>
      </div>
      <Footer />
    </div>
  );
}
