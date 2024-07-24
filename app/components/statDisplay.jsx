import Image from "next/image";
import React from "react";

export default function StatDisplay({ statTitle, statValue, statIcon }) {
  return (
    <>
      <div className="stat flex h-fit w-fit space-x-5 rounded-2xl bg-[#fff] text-[#000]">
        {/* text */}
        <div className="flex flex-col items-start justify-around">
          <div className="stat-title text-sm">{statTitle}</div>
          <div className="stat-value text-lg">{statValue}</div>
        </div>

        {/* image */}
        <div className="stat-figure text-secondary">
          <div className="avatar">
            <div className="w-16 rounded-2xl">
              <Image src={statIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
