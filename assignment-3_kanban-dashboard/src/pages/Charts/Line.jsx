import React from "react";
import { ChartsHeader,LineChart } from "../../components";

const Line = () => {
  return(
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <ChartsHeader category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
