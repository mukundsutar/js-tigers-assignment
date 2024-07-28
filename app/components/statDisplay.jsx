import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StatDisplay({
  statTitle,
  statValue,
  statIcon,
  loading,
}) {
  statValue = statValue + ` ${statTitle == "Utilization" ? "" : " Bookings"}`;

  return (
    <>
      <div className="stat flex h-fit w-fit space-x-2 rounded-2xl bg-[#fff] p-3 text-[#000] shadow-md lg:w-fit lg:px-6">
        {/* text */}
        <div className="flex flex-col items-start justify-around px-1.5 lg:flex-1 lg:px-0">
          <div className="stat-title text-sm lg:text-lg">{statTitle}</div>
          <div className="stat-value text-base lg:text-lg">
            {loading ? <Skeleton width={100} inline /> : statValue}
          </div>
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
