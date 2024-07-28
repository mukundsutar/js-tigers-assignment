"use client";
import React, { useEffect, useState } from "react";
import FilterAnalytics from "../components/filterAnalytics";
import Milestones from "../components/milestones";
import Timelines from "../components/timelines";
import ShipmentPhase from "../components/shipmentPhase";
import TableDisplay from "../components/tableDisplay";
import CustomTabs from "../components/customTabs";

export default function Dashboard() {
  // api fetch shipment
  const [shipmentLoading, setShipmentLoading] = useState(true);
  const [shipmentData, setShipmentData] = useState([]);
  useEffect(() => {
    fetch("/api/shipments")
      .then((response) => response.json())
      .then((data) => {
        setShipmentData(data);
        setShipmentLoading(false);
      });
  }, []);

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
          <FilterAnalytics shipmentData={shipmentData} />
        </div>

        <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="mx-auto flex h-[100%] w-full flex-col rounded-2xl bg-white p-4 text-sm shadow-md lg:w-[50%]">
            <Milestones shipmentData={shipmentData} loading={shipmentLoading}/>
          </div>

          <div className="mx-auto flex h-[100%] w-full flex-col rounded-2xl bg-white p-5 text-sm shadow-md lg:w-[50%]">
            <Timelines shipmentData={shipmentData} loading={shipmentLoading}/>
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap gap-5">
          {shipmentPhaseArray.map((item, index) => (
            <ShipmentPhase
              key={index}
              title={item}
              shipmentData={shipmentData}
              property={item.toLowerCase()}
              loading={shipmentLoading}
            />
          ))}
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-4 shadow-md">
          <TableDisplay shipmentData={shipmentData} loading={shipmentLoading}/>
        </div>
      </div>
    </>
  );
}
