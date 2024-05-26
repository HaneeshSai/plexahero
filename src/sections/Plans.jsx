import React from "react";
import PriceCard from "../components/PriceCard";

const plans = [
  {
    name: "Standard Hosting",
    description:
      "Perfect for larger groups and more complex builds. Supports 20-50 players with enhanced performance.",
    ram: 2,
    cpu: 120,
    disk: 5,
    price: 1.5,
    emoji: "https://cdn.lordicon.com/otvlwawf.json",
    link: "/launching",
  },
  {
    name: "Starter Hosting",
    description:
      "Great for medium-sized groups. Suitable for running a standard Minecraft server with 10-20 players.",
    ram: 1,
    cpu: 80,
    disk: 1,
    price: "Free",
    emoji: "https://cdn.lordicon.com/slduhpfd.json",
    link: "https://client.plexanodes.net",
  },
  {
    name: "Advanced Hosting",
    description:
      "For dedicated players and larger communities. Provides top-tier performance for 50-100 players.",
    ram: 4,
    cpu: 200,
    disk: 15,
    price: 3.25,
    emoji: "https://cdn.lordicon.com/ihyatngd.json",
    link: "/launching",
  },
];

export default function Plans() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl md:text-6xl font-bold">Our Plans</h1>
      <p className="mx-4 md:mx-56 text-center my-2 text-sm md:text-lg">
        Our plans offer competitive prices and top-tier features, ensuring
        excellent performance, security, and reliability. Whether you're hosting
        websites, Minecraft servers, or Discord bots, we've got you covered with
        scalable solutions and 24/7 expert support. Discover the perfect hosting
        plan today.
      </p>
      <div className="flex md:flex-row flex-col gap-20 my-5 md:my-20 justify-center w-[80%]">
        {plans.map((e, i) => (
          <PriceCard e={e} i={i} scale={"yes"} />
        ))}
      </div>
    </div>
  );
}
