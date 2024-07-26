"use client";
import React from "react";
import StatDisplay from "../components/statDisplay";
import Image from "next/image";
import MapPicture from "../assets/map.png";
import PieData from "../components/pieData";
import DocumentListItem from "../components/documentListItem";
import Annoucement from "../components/annoucement";
import TotalBookings from "../assets/icons/booking-total.svg";
import BookingsUtilized from "../assets/icons/booking-utilized.svg";
import BookingCancelled from "../assets/icons/booking-cancelled.svg";
import Utilization from "../assets/icons/utilization.svg";
import CustomTabs from "../components/custonTabs";
import Map from "../components/map";

export default function Dashboard() {
  const pieChart = [
    "Origin Port",
    "Destination Port",
    "Carrier",
    "Consignee or Shipper",
    "Milestones",
  ];

  const arr = ["", "", "", "", "", "", "", ""];
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
        {/* stats section */}
        <div className="flex w-full flex-row justify-between">
          {statsArray.map((item, index) => (
            <StatDisplay
              statTitle={item.title}
              statValue={item.value}
              statIcon={item.icon}
            />
          ))}
        </div>

        {/* map section */}
        <Map />

        {/* pie chart section */}
        <div className="flex flex-col rounded-2xl bg-[#fff] p-4 text-[#000]">
          <div className="flex flex-row">
            <div className="flex w-[50%] items-start font-bold">
              Pie Chart Analysis
            </div>

            {/* can use button here, try later */}
            <div className="flex w-[50%] items-start justify-start">
              <CustomTabs />
            </div>
          </div>

          <div className="flex h-fit flex-row justify-between">
            {pieChart.map((item, index) => (
              <PieData key={index} chartTitle={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-row space-x-5">
          {/* latest documents */}
          <div className="flex h-96 w-[50%] flex-col rounded-2xl bg-white p-4 text-black">
            <div className="mb-4 font-bold">Latest Documents</div>
            <div className="overflow-y-auto">
              {arr.map((item, index) => (
                <>
                  {index != 0 && <div className="divider my-2"></div>}
                  <DocumentListItem key={index} />
                </>
              ))}
            </div>
          </div>

          {/* annoucements */}
          <div className="flex h-full w-[50%] flex-col rounded-2xl bg-white p-4 text-black">
            <Annoucement />
          </div>
        </div>
      </div>
    </>
  );
}
