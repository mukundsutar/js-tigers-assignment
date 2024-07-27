import clsx from "clsx";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const renderLegend = (props) => {
  const { payload, chartLabel } = props;

  return (
    <>
      <div className="mb-4 text-center text-sm">{chartLabel}</div>
      <ul className="h-40 space-y-2 overflow-y-auto">
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            className="flex flex-row items-center text-xs"
          >
            <div
              className="m-1 h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <div className="truncate">{entry.value}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default function PieData({ chartLabel, chartData }) {
  return (
    <div className="w-fit">
      <ResponsiveContainer width={200} height={400}>
        <PieChart>
          <Pie
            data={chartData}
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
            isAnimationActive={false}
            legendType="circle"
          >
            {chartData.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            content={(props) => renderLegend({ ...props, chartLabel })}
            iconType="circle"
            iconSize={12}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
