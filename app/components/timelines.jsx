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

export default function Timelines() {
  const data = [
    { name: "Late", value: 10, color: "#f7a668" },
    { name: "On Time", value: 681, color: "#7bb896" },
  ];

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="font-bold">Timelines</div>
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
