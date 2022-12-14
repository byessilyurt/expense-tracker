import React from "react";
import { useSelector } from "react-redux";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import pieGraphData from "../data";

const PieGraph = ({ type, id, legendVisiblity, height }) => {
  const data = type === "income" ? pieGraphData.income : pieGraphData.expense;
  return (
    <>
      {data.length > 0 ? (
        <AccumulationChartComponent
          id={id}
          legendSettings={{ visible: legendVisiblity, background: "white" }}
          height={height}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Sale"
              dataSource={data}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#fff",
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      ) : (
        <span> Veri yok </span>
      )}
    </>
  );
};

export default PieGraph;
