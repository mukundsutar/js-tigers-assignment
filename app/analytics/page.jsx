"use client";
import React from "react";
import StatDisplay from "../components/statDisplay";
import Image from "next/image";
import Map from "../assets/map.png";
import PieData from "../components/pieData";
import DocumentListItem from "../components/documentListItem";
import Annoucement from "../components/annoucement";
import TotalBookings from "../assets/icons/booking-total.svg";
import BookingsUtilized from "../assets/icons/booking-utilized.svg";
import BookingCancelled from "../assets/icons/booking-cancelled.svg";
import Utilization from "../assets/icons/utilization.svg";
import Navbar from "../components/navbar";
import FilterAnalytics from "../components/filterAnalytics";
import Milestones from "../components/milestones";
import Timelines from "../components/timelines";
import ShipmentPhase from "../components/shipmentPhase";
import TableDisplay from "../components/tableDisplay";

export default function Dashboard() {
  const pieChart = [
    "Origin Port",
    "Destination Port",
    "Carrier",
    "Consignee or Shipper",
    "Milestones",
  ];

  const arr = ["", "", "", "", "", "", "", ""];
  const shipmentPhaseArray = [
    "Loading",
    "Discharge",
    "Delivery",
    "Shipper",
    "Consignee",
    "Carrier",
  ];
  const statsArray = [
    { title: "Total Bookings", value: "501 Bookings", icon: TotalBookings },
    {
      title: "Bookings Utilized",
      value: "501 Bookings",
      icon: BookingsUtilized,
    },
    { title: "Booking Cancelled", value: "0 Bookings", icon: BookingCancelled },
    { title: "Utilization", value: "100%", icon: Utilization },
  ];

  return (
    <>
      <div className="flex h-full w-full flex-col space-y-5 bg-[#f1f1f1] px-10 py-5">
        {/* shipments/container toggle */}
        <div className="mx-auto w-fit space-x-12 rounded-2xl bg-white p-4 shadow-md">
          <button className="btn">Shipments</button>
          <button className="btn">Containers</button>
        </div>

        {/* filter */}
        <div className="mx-auto flex w-full flex-row space-x-6 rounded-2xl bg-white p-4 text-sm shadow-md">
          <FilterAnalytics />
        </div>

        <div className="flex w-full flex-row space-x-4">
          <div className="mx-auto flex h-[100%] w-[50%] flex-col space-x-6 rounded-2xl bg-white p-4 text-sm shadow-md">
            <Milestones />
          </div>

          <div className="mx-auto flex h-[100%] w-[50%] flex-col space-x-6 rounded-2xl bg-white p-5 text-sm shadow-md">
            <Timelines />
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap gap-5">
          {shipmentPhaseArray.map((item, index) => (
            <ShipmentPhase key={index} title={item} />
          ))}
        </div>

        <div className="bg-white shadow-md p-4 rounded-2xl">
          <TableDisplay/>
        </div>
      </div>
    </>
  );
}
