import React from "react";

export default function ShipmentPhase({ title }) {
  const data = [
    { name: "NHAVA SHEVA, INDIA", value: 378 },
    { name: "HONG KONG, HONG KONG", value: 70 },
    { name: "YANTIAN, CHINA", value: 48 },
    { name: "DALIAN, CHINA", value: 29 },
    { name: "SHANGHAI, 31, CHINA", value: 10 },
    { name: "LONDON GATEWAY PORT, UK", value: 26 },
    { name: "NHAVA SHEVA, INDIA", value: 378 },
    { name: "HONG KONG, HONG KONG", value: 70 },
    { name: "YANTIAN, CHINA", value: 48 },
    { name: "DALIAN, CHINA", value: 29 },
    { name: "SHANGHAI, 31, CHINA", value: 10 },
    { name: "LONDON GATEWAY PORT, UK", value: 26 },
  ];

  return (
    <>
      <div className="w-[32%] rounded-2xl bg-white p-4 shadow-md">
        <div className="mb-4 space-y-5 font-bold">{title}</div>

        <div className="h-52 overflow-y-auto">
          {data.map((item, index) => (
            <>
              {index != 0 && <div className="divider my-0.5"></div>}
              <div
                key={index}
                className="flex w-[90%] flex-row justify-between"
              >
                <div className="text-xs">{item.name}</div>
                <div className="text-xs">{item.value}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
