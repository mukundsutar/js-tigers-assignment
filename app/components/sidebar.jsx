import React from "react";
import AnalyticsIcon from "./svgIcons/analytics";
import ArchiveIcon from "./svgIcons/archive";
import HistoryIcon from "./svgIcons/history";
import QuoteIcon from "./svgIcons/quote";
import RateRequestIcon from "./svgIcons/rate_request";
import ShipmentIcon from "./svgIcons/shipment_package";
import UserIcon from "./svgIcons/user";
import KeyDownArrow from "./svgIcons/key_down_arrow";
import DashboardIcon from "./svgIcons/dashboard";
import clsx from "clsx";

export default function Sidebar() {
  const iconStyle = "text-white ";

  const sidebarList = [
    {
      label: "Dashboard",
      route: "/dashboard",
      icon: (
        <DashboardIcon
          width={"2em"}
          height={"2em"}
          className={clsx(iconStyle)}
        />
      ),
      accordion: false,
    },
    {
      label: "Analytics",
      route: "analytics",
      icon: (
        <AnalyticsIcon
          width={"2em"}
          height={"2em"}
          className={clsx(iconStyle)}
        />
      ),
      accordion: false,
    },
    {
      label: "Rate Request",
      route: "",
      icon: (
        <RateRequestIcon
          width={"2em"}
          height={"2em"}
          className={clsx(iconStyle)}
        />
      ),
      accordion: true,
    },
    {
      label: "Quote",
      route: "",
      icon: (
        <QuoteIcon width={"2em"} height={"2em"} className={clsx(iconStyle)} />
      ),
      accordion: true,
    },
    {
      label: "Shipments",
      route: "",
      icon: (
        <ShipmentIcon
          width={"2em"}
          height={"2em"}
          className={clsx(iconStyle)}
        />
      ),
      accordion: false,
    },
    {
      label: "User List",
      route: "",
      icon: (
        <UserIcon width={"2em"} height={"2em"} className={clsx(iconStyle)} />
      ),
      accordion: false,
    },
    {
      label: "Archive",
      route: "",
      icon: (
        <ArchiveIcon width={"2em"} height={"2em"} className={clsx(iconStyle)} />
      ),
      accordion: true,
    },
    {
      label: "History",
      route: "",
      icon: (
        <HistoryIcon width={"2em"} height={"2em"} className={clsx(iconStyle)} />
      ),
      accordion: false,
    },
  ];

  return (
    <>
      <ul className="menu min-h-full w-72 rounded-r-3xl bg-primary p-4 pt-32 text-white">
        {/* Sidebar content here */}

        {sidebarList.map((item, index) => (
          <li key={index}>
            <a className="flex h-14 items-center space-x-5 hover:bg-[#7d2e27]">
              {item.icon}

              <div className="flex-1 text-white active:text-primary">
                {item.label}
              </div>

              {item.accordion && (
                <KeyDownArrow
                  width={"2em"}
                  height={"2em"}
                  className={clsx(iconStyle)}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
