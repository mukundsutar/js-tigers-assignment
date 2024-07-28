import React from "react";
import MediaQuery from "react-responsive";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const colorPalette = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#FFC300",
  "#DAF7A6",
  "#C70039",
  "#900C3F",
  "#581845",
  "#1F618D",
];

const formatMilestoneData = (shipmentData) => {
  const counts = shipmentData.reduce((acc, item) => {
    const milestone = item.milestone;
    acc[milestone] = (acc[milestone] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).map((key, index) => ({
    name: key,
    value: counts[key],
    color: colorPalette[index % colorPalette.length],
  }));
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

export default function Milestones({ shipmentData, loading }) {
  const data = formatMilestoneData(shipmentData);

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="font-bold">Milestones</div>

        <button className="btn btn-outline btn-sm">IN-TRANSIT (463)</button>
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
                blendStroke={true}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    style={{ outline: "none" }}
                    stroke=""
                  />
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
