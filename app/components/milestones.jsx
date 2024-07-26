import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

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

export default function Milestones() {
  const data = [
    { name: "Booked", value: 19, color: "#6b120a" },
    { name: "Discharged", value: 29, color: "#eb5d50" },
    { name: "Arrived", value: 22, color: "#f7a668" },
    { name: "Delivered", value: 393, color: "#7bb896" },
    { name: "Returned", value: 149, color: "#1073e6" },
  ];

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="font-bold">Milestones</div>

        <button className="btn btn-outline btn-sm">IN-TRANSIT (463)</button>
      </div>

      <div className="flex w-full flex-row items-center justify-center">
        <ResponsiveContainer width={300} height={200}>
          <PieChart>
            <Pie
              data={data}
              outerRadius={80}
              fill="#8884d8"
              startAngle={90}
              endAngle={450}
              dataKey="value"
              isAnimationActive={false}
              legendType="circle"
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
      </div>
    </>
  );
}
