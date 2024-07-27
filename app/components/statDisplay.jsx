import Image from "next/image";
import React from "react";

export default function StatDisplay({ statTitle, statValue, statIcon }) {
  return (
    <>
      <div className="stat flex h-fit w-fit space-x-2 rounded-2xl bg-[#fff] p-3 text-[#000] shadow-md lg:w-[23%] lg:px-6">
        {/* text */}
        <div className="flex flex-col items-start justify-around lg:flex-1">
          <div className="stat-title text-sm">{statTitle}</div>
          <div className="stat-value text-lg">{statValue}</div>
        </div>

        {/* image */}
        <div className="stat-figure hidden text-secondary lg:flex">
          <div className="avatar">
            <div className="w-16 rounded-2xl">
              <Image src={statIcon} alt="stat icon placeholder" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
