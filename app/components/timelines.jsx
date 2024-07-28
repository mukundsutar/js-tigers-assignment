import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const colorPalette = {
  onTime: "#7bb896", // Green for on time
  late: "#f7a668", // Orange for late
};

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <>
      <ul>
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            className="flex flex-row items-center text-xs uppercase"
          >
            <div
              className="m-1 h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            {entry.payload.name + ` (${entry.payload.value})`}
          </li>
        ))}
      </ul>
    </>
  );
};

const formatTimelineData = (shipmentData) => {
  const counts = { onTime: 0, late: 0 };

  shipmentData.forEach((item) => {
    const estimatedDeparture = new Date(item.estimated_time_of_departure);
    const actualDeparture = new Date(item.actual_time_of_departure);
    const estimatedArrival = new Date(item.estimated_time_of_arrival);
    const actualArrival = new Date(item.actual_time_of_arrival);

    if (
      actualDeparture > estimatedDeparture ||
      actualArrival > estimatedArrival
    ) {
      counts.late += 1;
    } else {
      counts.onTime += 1;
    }
  });

  return [
    { name: "Late", value: counts.late, color: colorPalette.late },
    { name: "On Time", value: counts.onTime, color: colorPalette.onTime },
  ];
};

export default function Timelines({ shipmentData, loading }) {
  const data = formatTimelineData(shipmentData);

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="font-bold">Timelines</div>
      </div>

      <div className="flex w-full flex-row items-center justify-center">
        {loading ? (
          <div className="my-3 flex flex-row items-center justify-center space-x-4">
            <Skeleton circle={true} height={175} width={175} />
            <Skeleton count={5} width={100} />
          </div>
        ) : (
          <ResponsiveContainer width={300} height={200}>
            <PieChart>
              <Pie
                data={data}
                outerRadius={80}
                dataKey="value"
                isAnimationActive={false}
                legendType="circle"
                blendStroke
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                content={renderLegend}
                iconType="circle"
                iconSize={12}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
}
