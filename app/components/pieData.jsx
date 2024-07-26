import clsx from "clsx";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const renderLegend = (props) => {
  const { payload, chartTitle } = props;

  return (
    <>
      <div className="mb-4 text-center text-sm">{chartTitle}</div>
      <ul>
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            className="flex flex-row items-center text-xs"
          >
            <div
              className="m-1 h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            {entry.value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default function PieData({ chartTitle }) {
  const data = [
    { name: "NHAVA SHEVA, INDIA", value: 55, color: "#6b120a" },
    { name: "HONG KONG, HONG KONG", value: 15, color: "#eb5d50" },
    { name: "YANTIAN, CHINA", value: 10, color: "#f7a668" },
    { name: "DALIAN, CHINA", value: 5, color: "#7bb896" },
    { name: "LONDON GATEWAY PORT, UK", value: 5, color: "#1073e6" },
    { name: "OTHER", value: 10, color: "#856562" },
  ];

  return (
    <div className="w-fit">
      <ResponsiveContainer width={200} height={350}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={50}
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
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            content={(props) => renderLegend({ ...props, chartTitle })}
            iconType="circle"
            iconSize={12}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
