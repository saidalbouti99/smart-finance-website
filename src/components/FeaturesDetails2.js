import React from "react";
import simulationui from "../img/simulation-ui.svg";

function FeaturesDetails2() {
  return (
    <div className="flex flex-row h-screen p-4 bg-primary items-center">
      <div className="w-2/4 flex flex-col items-center">
        <img
          src={simulationui}
          alt="Investment Simulator UI"
          className="rounded-xl"
        />
      </div>
      <div className="w-2/4 flex flex-col justify-center items-start ml-10">
        <h2 className="text-secondary font-bold text-4xl ">
          Learn about Islamic
          <br className="leading-relaxed" />
          Investment in Malaysia
          <br className="leading-relaxed" />
          through simulation
        </h2>
        <p className="text-secondary font-bold text-xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default FeaturesDetails2;
