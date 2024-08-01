import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import MediaQuery from "react-responsive";

export default function FilterAnalytics({ shipmentData }) {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(1),
  });
  const [selectedCommodity, setSelectedCommodity] = useState("");

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    setSelectedCommodity(event.target.value);
  };
  const uniqueCommodities = [
    ...new Set(shipmentData.map((item) => item.commodity)),
  ];

  return (
    <>
      {/* type */}
      <div className="flex w-[25%] flex-row items-center space-x-5">
        <div className="font-bold">Type</div>
        <select
          className="select select-bordered select-sm w-full rounded-full"
          value={selectedCommodity}
          onChange={handleSelectChange}
        >
          <option disabled selected>
            Select
          </option>
          {uniqueCommodities.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>

      {/* date */}
      <div className="flex flex-row items-center space-x-5">
        <div className="font-bold">Date</div>
        <div className="z-100 relative w-11 lg:w-fit">
          <div className="hidden lg:flex">
            <Datepicker
              primaryColor={"red"}
              value={value}
              onChange={handleValueChange}
              placeholder="Select Date Range"
              containerClassName="border-2 rounded-full w-full"
              inputClassName="py-1.5 rounded-full px-2 w-full"
            />
          </div>

          {/* responsive */}
          <MediaQuery minWidth={150} maxWidth={1023}>
            <Datepicker
              primaryColor={"red"}
              value={value}
              onChange={handleValueChange}
              useRange={false}
              placeholder=" "
              containerClassName="border-2 rounded-full w-full"
              inputClassName="py-1.5 rounded-full px-2 w-full"
              displayFormat={" "}
            />
          </MediaQuery>
        </div>
      </div>

      {/* period */}
      <div className="flex w-[25%] flex-row items-center space-x-5">
        <div className="font-bold">Period</div>
        <select className="select select-bordered select-sm w-full rounded-full">
          <option disabled selected>
            Select
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>

      {/* buttons */}
      <div className="flex flex-row space-x-2 lg:space-x-5">
        <button className="btn btn-outline btn-sm rounded-full border-[#6b120a] text-xs text-[#6b120a] lg:px-5">
          Cancel
        </button>
        <button className="btn btn-sm rounded-full border-0 bg-[#6b120a] text-xs text-white lg:px-5">
          Go
        </button>
      </div>
    </>
  );
}
