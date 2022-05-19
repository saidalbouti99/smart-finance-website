import React from "react";
import background from "../img/bg_banner.png";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col h-max md:h-[90vh] px-2"
    >
      <h1 className="text-secondary md:text-6xl text-center mt-14 font-bold">
        A New Way to Improve Your
        <br className="leading-loose" />
        Financial Literacy
      </h1>
      <h4 className="text-secondary md:text-3xl text-center font-semibold mt-4">
        All in one app to learn and
        <br className="leading-normal" /> manage your finances
      </h4>
      <a
        className="text-primary mx-auto rounded-2xl py-2 px-4 w-48 text-lg text-center font-bold mt-6 bg-secondary"
        href="https://drive.google.com/drive/folders/103NdWcDT0lVPNOp-7-LKicxZ2sUAKa9R?usp=sharing"
        target="_blank"
      >
        Download Now
      </a>
    </div>
  );
}
