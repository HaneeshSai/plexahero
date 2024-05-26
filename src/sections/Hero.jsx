import React from "react";
import minecraft from "../assets/minecraft-images2.png";
import duck from "../assets/minecraft-images1.png";
import gold from "../assets/minecraft-images3.png";
import useScreenSize from "../../utils/screenSize";

export default function Hero() {
  const screenSize = useScreenSize();
  const getStarted = () => {
    window.scrollTo({
      top: 950, // Replace 500 with the position you want to scroll to
      behavior: "smooth", // Optional: adds smooth scrolling
    });
  };

  return (
    <div className="flex font-mont w-full text-center flex-col gap-2 items-center my-10">
      <h1 className="md:text-6xl text-4xl font-mont font-semibold">
        Welcome to <span className="text-purple-300">Plexa Nodes</span>
      </h1>
      <p className="md:text-3xl text-xl font-medium">
        Your Ultimate Hosting Solution!
      </p>

      <h1 className="text-xl md:text-3xl font-bold mt-2">
        Ultimate Hosting for Gamers and Communities
      </h1>
      <div className="flex md:flex-row flex-col text-center gap-10 mt-3 items-center w-[70%]">
        <div>
          <p className="flex-1 font-semibold text-sm md:text-xl text-center text-md">
            With Plexa, you can get your server up and running in under 2
            minutes after making your purchase, making it quick and easy to
            start your online projects. Say goodbye to long waits and hello to a
            speedy setup with Pylex!
          </p>
          <button
            onClick={getStarted}
            className="border-2 rounded-full text-black bg-cyan-300 border-cyan-600 px-4 py-1 my-10 text-2xl font-semibold "
          >
            Get Started Now
          </button>
        </div>

        <img
          src={minecraft}
          className="md:h-[360px] h-[260px] object-fit mt-12 animate-image"
          alt=""
        />
      </div>
      {screenSize !== "small" ? (
        <div className="flex justify-between w-[90%]">
          <img src={gold} className="h-36 right-to-left" alt="" />
          <img src={duck} className="h-36 left-to-right" alt="" />
        </div>
      ) : null}
    </div>
  );
}
