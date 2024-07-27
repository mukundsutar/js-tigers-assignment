import React from "react";

export default function ShipmentPhase({ title, shipmentData,property }) {
  const formatData = (data, property) => {
    const uniqueValues = [...new Set(data.map((item) => item[property]))];
    return uniqueValues.map((entry) => ({ place: entry }));
  };
  const formattedData = formatData(shipmentData, property);

  return (
    <>
      <div className="w-[32%] rounded-2xl bg-white p-4 shadow-md">
        <div className="mb-4 space-y-5 font-bold">{title}</div>

        <div className="h-52 overflow-y-auto">
          {formattedData.map((item, index) => (
            <>
              {index != 0 && <div className="divider my-0.5"></div>}
              <div
                key={index}
                className="flex w-[90%] flex-row justify-between"
              >
                <div className="text-xs">{item.place}</div>
                {/* <div className="text-xs">
                  {Math.floor(Math.random() * 200) + 1}
                </div> */}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
