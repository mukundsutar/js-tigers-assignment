"use client";
import React, { useEffect, useState } from "react";
import StatDisplay from "../components/statDisplay";
import PieData from "../components/pieData";
import DocumentListItem from "../components/documentListItem";
import Annoucement from "../components/annoucement";
import TotalBookings from "../assets/icons/booking-total.svg";
import BookingsUtilized from "../assets/icons/booking-utilized.svg";
import BookingCancelled from "../assets/icons/booking-cancelled.svg";
import Utilization from "../assets/icons/utilization.svg";
import CustomTabs from "../components/customTabs";
import Map from "../components/map";

export default function Dashboard() {
  // api fetch shipment
  const [shipmentData, setShipmentData] = useState([]);
  useEffect(() => {
    fetch("/api/shipments")
      .then((response) => response.json())
      .then((data) => setShipmentData(data));
  }, []);

  // api fetch document
  const [documentData, setDocumentData] = useState([]);
  useEffect(() => {
    fetch("/api/documents")
      .then((response) => response.json())
      .then((data) => setDocumentData(data));
  }, []);

  // stats calculating
  const totalBookingsCalc = shipmentData.length;
  const canceledCount = shipmentData.filter(
    (booking) => booking.booking_status === "CANCELLED",
  ).length;
  const statsArray = [
    { title: "Total Bookings", value: totalBookingsCalc, icon: TotalBookings },
    {
      title: "Bookings Utilized",
      value: totalBookingsCalc,
      icon: BookingsUtilized,
    },
    {
      title: "Booking Cancelled",
      value: canceledCount,
      icon: BookingCancelled,
    },
    { title: "Utilization", value: "100%", icon: Utilization },
  ];

  // pie chart data calculating
  const countUniqueValues = (arr, key) => {
    return arr.reduce((acc, item) => {
      const value = item[key];
      if (acc[value]) {
        acc[value]++;
      } else {
        acc[value] = 1;
      }
      return acc;
    }, {});
  };

  const originCounts = countUniqueValues(shipmentData, "loading");
  const destinationCounts = countUniqueValues(shipmentData, "delivery");
  const carrierCounts = countUniqueValues(shipmentData, "carrier");
  const consigneeCounts = countUniqueValues(shipmentData, "consignee");
  const milestoneCounts = countUniqueValues(shipmentData, "milestone");

  const colorPalette = [
    "#001219",
    "#005f73",
    "#0a9396",
    "#94d2bd",
    "#e9d8a6",
    "#ee9b00",
    "#ca6702",
    "#bb3e03",
    "#ae2012",
    "#9b2226",
  ];

  const formatData = (counts) => {
    const colors = {};
    return Object.keys(counts).map((key, index) => {
      // Assign a random color from the palette
      const colorIndex = Math.floor(Math.random() * colorPalette.length);
      const color = colorPalette[index];
      colors[key] = color; // Store the color for this label
      return {
        name: key,
        value: counts[key],
        color: color, // Add the color to the data object
      };
    });
  };

  const pieChart = [
    { chartLabel: "Origin Port", data: formatData(originCounts) },
    { chartLabel: "Destination Port", data: formatData(destinationCounts) },
    { chartLabel: "Carrier", data: formatData(carrierCounts) },
    { chartLabel: "Consignee or Shipper", data: formatData(consigneeCounts) },
    { chartLabel: "Milestones", data: formatData(milestoneCounts) },
  ];

  return (
    <>
      <div className="flex h-full w-full flex-col space-y-5 bg-[#f1f1f1] px-4 py-5 lg:px-10">
        {/* stats section */}
        <div className="flex w-full flex-row justify-between">
          {statsArray.map((item, index) => (
            <StatDisplay
              key={index}
              statTitle={item.title}
              statValue={item.value}
              statIcon={item.icon}
            />
          ))}
        </div>

        {/* map section */}
        <Map />

        {/* pie chart section */}
        <div className="flex flex-col rounded-2xl bg-[#fff] p-4 text-[#000] shadow-md">
          <div className="flex flex-row">
            <div className="flex w-[50%] items-center font-bold lg:items-start">
              Pie Chart Analysis
            </div>

            {/* can use button here, try later */}
            <div className="flex w-[50%] items-start justify-start">
              <CustomTabs />
            </div>
          </div>

          <div className="flex h-fit flex-row justify-between overflow-x-auto pb-4 lg:pb-0">
            {pieChart.map((item, index) => (
              <PieData
                key={index}
                chartLabel={item.chartLabel}
                chartData={item.data}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          {/* latest documents */}
          <div className="flex h-96 w-full flex-col rounded-2xl bg-white p-4 text-black shadow-md lg:w-[50%]">
            <div className="mb-4 font-bold">Latest Documents</div>
            <div className="overflow-y-auto">
              {documentData.map((item, index) => (
                <>
                  {index != 0 && <div className="divider my-2"></div>}
                  <DocumentListItem key={index} documentData={item} />
                </>
              ))}
            </div>
          </div>

          {/* annoucements */}
          <div className="flex h-full lg:w-[50%] flex-col rounded-2xl bg-white p-4 text-black shadow-md">
            <Annoucement />
          </div>
        </div>
      </div>
    </>
  );
}
