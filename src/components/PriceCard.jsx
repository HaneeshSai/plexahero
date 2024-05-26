import React from "react";
import Tilt from "react-parallax-tilt";

export default function PriceCard({ e, i, scale }) {
  return (
    <Tilt>
      <div
        key={i}
        className={`flex cursor-pointer flex-1 border text-xl glow-border hover:border-dashed hover:duration-1000 hover:border-blue-600 border-slate-100 px-6 gap-4 py-6 rounded items-center flex-col ${
          i === 1 && scale === "yes" ? "scale-[110%]" : ""
        }`}
      >
        <div className="flex justify-between gap-5">
          <p className="font-semibold w-full  text-left text-3xl">{e.name}</p>

          <lord-icon
            src={e.emoji}
            trigger="hover"
            style={{
              width: 70,
              height: 70,
            }}
          ></lord-icon>
        </div>
        <div className="flex justify-start gap-2 w-full">
          <p className="text-3xl font-semibold text-shadow">${e.price}</p>
          <p className="text-sm mt-2">/Month</p>
        </div>
        <p className="text-sm ">{e.description}</p>
        <p>{e.ram} GB RAM</p>
        <p>{e.cpu}% CPU</p>
        <p>{e.disk}GB Disk Space</p>
        <a
          href={e.link}
          className="w-full bg-white text-center text-black rounded py-1 font-semibold button-hover"
        >
          Choose Plan
        </a>
      </div>
    </Tilt>
  );
}
