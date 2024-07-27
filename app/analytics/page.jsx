"use client";
import React, { useEffect, useState } from "react";
import FilterAnalytics from "../components/filterAnalytics";
import Milestones from "../components/milestones";
import Timelines from "../components/timelines";
import ShipmentPhase from "../components/shipmentPhase";
import TableDisplay from "../components/tableDisplay";
import CustomTabs from "../components/customTabs";
import Datepicker from "react-tailwindcss-datepicker";

export default function Dashboard() {
  // api fetch shipment
  const [shipmentData, setShipmentData] = useState([]);
  useEffect(() => {
    fetch("/api/shipments")
      .then((response) => response.json())
      .then((data) => setShipmentData(data));
  }, []);

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(1),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const shipmentPhaseArray = [
    "Loading",
    "Discharge",
    "Delivery",
    "Shipper",
    "Consignee",
    "Carrier",
  ];

  // shipment
  const [buttonToggle, setButtonToggle] = useState(false);

  return (
    <>
      <div className="flex h-full w-full flex-col space-y-5 bg-[#f1f1f1] px-10 py-5">
        <div className="mx-auto">
          <CustomTabs />
        </div>

        {/* shipments/container toggle */}
        <div className="mx-auto w-fit space-x-10 rounded-2xl bg-white p-4 shadow-md">
          <button
            className={`btn btn-sm ${!buttonToggle ? "btn-active border-0 bg-[#e7e0e0] text-[#856562]" : "border-0 bg-white text-[#969596] shadow-none"}`}
            onClick={() => setButtonToggle(false)}
          >
            Shipments
          </button>
          <button
            className={`btn btn-sm ${buttonToggle ? "btn-active border-0 bg-[#e7e0e0] text-[#856562]" : "border-0 bg-white text-[#969596] shadow-none"}`}
            onClick={() => setButtonToggle(true)}
          >
            Containers
          </button>
        </div>

        {/* filter */}
        <div className="mx-auto flex w-full flex-row space-x-6 rounded-2xl bg-white p-4 text-sm shadow-md">
          {/* type */}
          <div className="flex w-[25%] flex-row items-center space-x-5">
            <div className="font-bold">Type</div>
            <select className="select select-bordered select-sm w-full rounded-full">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          {/* date */}
          <div className="flex flex-row items-center space-x-5">
            <div className="font-bold">Date</div>
            <div className="z-100 relative">
              <Datepicker
                primaryColor={"red"}
                value={value}
                onChange={handleValueChange}
                placeholder="Select Date Range"
                containerClassName="border-2 rounded-full"
                inputClassName="py-1.5 rounded-full px-2"
              />
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
          <button className="btn btn-outline btn-sm rounded-full border-[#6b120a] px-5 text-xs text-[#6b120a]">
            Cancel
          </button>
          <button className="btn btn-sm rounded-full border-0 bg-[#6b120a] px-5 text-xs text-white">
            Go
          </button>
        </div>

        <div className="flex w-full flex-row space-x-4">
          <div className="mx-auto flex h-[100%] w-[50%] flex-col space-x-6 rounded-2xl bg-white p-4 text-sm shadow-md">
            <Milestones shipmentData={shipmentData} />
          </div>

          <div className="mx-auto flex h-[100%] w-[50%] flex-col space-x-6 rounded-2xl bg-white p-5 text-sm shadow-md">
            <Timelines shipmentData={shipmentData} />
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap gap-5">
          {shipmentPhaseArray.map((item, index) => (
            <ShipmentPhase
              key={index}
              title={item}
              shipmentData={shipmentData}
              property={item.toLowerCase()}
            />
          ))}
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-4 shadow-md">
          <TableDisplay />
        </div>
      </div>
    </>
  );
}
