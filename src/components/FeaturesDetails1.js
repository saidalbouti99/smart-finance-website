import React from "react";
import budgetui from "../img/budget-ui.svg";

function FeaturesDetails1() {
  return (
    <div
      id="FeaturesDetails1"
      className="flex flex-row h-screen py-4 bg-primary items-center"
    >
      <div className="flex flex-col w-2/4 items-center">
        <h2 className="text-4xl text-secondary font-bold ">
          Wonderful ways to keep track
          <br className="leading-loose" />
          of your spending seamlessly
        </h2>
        <p className="text-xl text-secondary font-semibold  mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="w-2/4">
        <img src={budgetui} alt="Budget Tracker UI" />
      </div>
    </div>
  );
}

export default FeaturesDetails1;
