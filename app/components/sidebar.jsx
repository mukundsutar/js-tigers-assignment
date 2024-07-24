import React from "react";
import Analytics from "../assets/icons/analytics.svg";
import Archive from "../assets/icons/archive.svg";
import DashboardIcon from "../assets/icons/dashboard-icon.svg";
import History from "../assets/icons/history.svg";
import Quote from "../assets/icons/quote.svg";
import RateRequest from "../assets/icons/rate-request.svg";
import Shipment from "../assets/icons/shipment.svg";
import User from "../assets/icons/user.svg";
import KeyDownArrow from "../assets/icons/key-down-arrow.svg";
import Image from "next/image";

export default function Sidebar() {
  const sidebarList = [
    { label: "Dashboard", route: "", icon: DashboardIcon, accordion: false },
    { label: "Analytics", route: "", icon: Analytics, accordion: false },
    { label: "Rate Request", route: "", icon: RateRequest, accordion: true },
    { label: "Quote", route: "", icon: Quote, accordion: true },
    { label: "Shipments", route: "", icon: Shipment, accordion: false },
    { label: "User List", route: "", icon: User, accordion: false },
    { label: "Archive", route: "", icon: Archive, accordion: true },
    { label: "History", route: "", icon: History, accordion: false },
  ];

  return (
    <>
      <ul className="menu min-h-full w-80 rounded-r-3xl bg-[#6b120a] p-4 pt-32 text-white">
        {/* Sidebar content here */}

        {sidebarList.map((item, index) => (
          <li key={index}>
            <a className="space-x-5">
              <Image src={item.icon} width={24} height={24} />
              <div>{item.label}</div>
              {item.accordion && <Image src={KeyDownArrow} className="from-neutral-100"/>}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
