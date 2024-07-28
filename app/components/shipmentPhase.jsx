import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ShipmentPhase({
  title,
  shipmentData,
  property,
  loading,
}) {
  const formatData = (data, property) => {
    const uniqueValues = [...new Set(data.map((item) => item[property]))];
    return uniqueValues.map((entry) => ({ place: entry }));
  };
  const formattedData = formatData(shipmentData, property);

  return (
    <>
      <div className="w-[48%] rounded-2xl bg-white p-4 shadow-md lg:w-[32%]">
        <div className="mb-4 space-y-5 text-lg font-bold">{title}</div>

        <div className="h-52 overflow-y-auto">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <Skeleton width="90%" height={20} />
                  {index !== 4 && <div className="divider my-0.5"></div>}
                </div>
              ))
            : formattedData.map((item, index) => (
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
