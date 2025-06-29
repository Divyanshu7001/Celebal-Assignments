import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Inject,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { ChartsHeader } from "../../components";

const Area = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <ChartsHeader category="Chart" title="Infleation Rate in Percentage" />
      <div className="w-full">
        <ChartComponent
          id="line-chart"
          height="420px"
          width="100%"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          tooltip={{ enable: true }}
          legendSettings={{ background: "white" }}
          chartArea={{ border: { width: 0 } }}
        >
          <Inject services={[DateTime, Legend, SplineAreaSeries]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
