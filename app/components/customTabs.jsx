import React, { useState } from "react";
import BoatIcon from "./svgIcons/boatIcon";
import AirIcon from "./svgIcons/airIcon";
import LandIcon from "./svgIcons/landIcon";

export default function CustomTabs() {
  const [activeTab, setActiveTab] = useState(0); // Start with the first tab as active

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabs = [
    { icon: <BoatIcon />, name: "Sea" },
    { icon: <AirIcon />, name: "Air" },
    { icon: <LandIcon />, name: "Land" },
  ];

  return (
    <div role="tablist" className="tabs flex w-fit gap-4">
      {tabs.map((tab, index) => (
        <a
          key={index}
          role="tab"
          className={`tab flex h-fit cursor-pointer gap-2 fill-[#9BA2AE] px-2 py-3 text-[#9BA2AE] transition-all duration-100 [--tab-bg:yellow] [--tab-border-color:orange] hover:border-b-2 hover:border-[#EB5D50] hover:fill-[#EB5D50] hover:text-[#EB5D50] ${
            activeTab === index
              ? "tab-active border-b-2 fill-[#EB5D50] text-[#EB5D50] [--tab-border-color:#EB5D50]"
              : ""
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab.icon}
          <p className="text-sm font-medium">{tab.name}</p>
        </a>
      ))}
    </div>
  );
}
