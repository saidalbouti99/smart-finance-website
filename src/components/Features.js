import React from "react";
import cart from "../img/cart.svg";
import hand from "../img/hand.svg";

function Features() {
  return (
    <div id="Features" className="flex flex-col h-[120vh] py-4 bg-primary">
      <h1 className="text-5xl font-bold text-secondary text-center md:mt-16">
        Our Key Features
      </h1>
      <div className="flex flex-row h-2/4 w-full md:mt-12  justify-center py-4">
        <img src={cart} alt="Cart Photo" />
        <Card
          number="1"
          title="Budget Tracker"
          desc="Track your income and expense daily"
        />
      </div>
      <div className="flex flex-row h-2/4 w-full justify-center md:mt-16 py-4">
        <Card
          number="2"
          title="Investment Simulator"
          desc="Track your income and expense daily"
        />
        <img src={hand} />
        <Card
          number="3"
          title="Financial Tips"
          desc="Track your income and expense daily"
        />
      </div>
    </div>
  );
}

function Card({ number, title, desc }) {
  return (
    <div className="bg-tertiary w-1/3 rounded-3xl md:mt-4 mx-0 flex flex-col p-5">
      <div className="flex flex-row items-center mt-5">
        <h1 className="text-secondary font-bold text-5xl ml-5 mr-7">
          {number}
        </h1>
        <h4 className="text-secondary text-3xl font-bold leading-none ">
          {title}
        </h4>
      </div>
      <p className="text-secondary font-semibold text-xl ml-5 mt-5">{desc}</p>
    </div>
  );
}
export default Features;
