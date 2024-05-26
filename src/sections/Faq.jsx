import React from "react";
// import "../styles/faq.css";

const faqs = [
  {
    q: "What distinguishes your hosting service for Minecraft and Discord bots from others?",
    ans: "Our hosting service stands out for its seamless integration of Minecraft server hosting and Discord bot deployment, ensuring a unified and hassle-free experience for gaming communities.",
  },
  {
    q: "How does your hosting platform ensure optimal performance for Minecraft servers and Discord bots?",
    ans: "We employ state-of-the-art infrastructure and optimized server configurations to guarantee smooth gameplay for Minecraft servers and uninterrupted functionality for Discord bots, backed by robust monitoring systems.",
  },
  {
    q: " What level of support do you provide for setting up and managing Minecraft servers and Discord bots?",
    ans: "Our dedicated support team offers comprehensive assistance ranging from initial setup to ongoing maintenance for Minecraft servers and Discord bots, ensuring our clients projects run smoothly at all times.",
  },
  {
    q: "Can I easily scale resources for my Minecraft server or Discord bot as my community grows?",
    ans: "Yes, our flexible hosting plans allow you to effortlessly scale resources for your Minecraft server or Discord bot to accommodate growing player bases or expanding server functionalities, ensuring optimal performance at all times.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="text-white w-full flex flex-col gap-4 items-center my-56">
        <h1 className="text-5xl font-bold">FAQs</h1>
        <p className="text-xl font-mono ">Frequenty Asked Questions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-24 my-10 text-xl font-medium gap-8 md:gap-16">
          {faqs.map((e, i) => (
            <div
              key={i}
              className="border-4 bg-slate-950 animate-border-blink rounded-xl p-5"
            >
              <p className="mb-5 font-bold">{e.q}</p>
              <p className="text-sm">{e.ans}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
