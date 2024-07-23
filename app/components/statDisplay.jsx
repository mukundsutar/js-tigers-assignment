import React from "react";

export default function StatDisplay() {
  return (
    <>
      <div className="stat flex h-fit w-fit space-x-5 rounded-2xl bg-[#fff] text-[#000]">
        {/* text */}
        <div className="flex flex-col items-start justify-around">
          <div className="stat-title text-sm">Total Bookings</div>
          <div className="stat-value text-lg">501 Bookings</div>
        </div>

        {/* image */}
        <div className="stat-figure text-secondary">
          <div className="avatar">
            <div className="w-16 rounded-2xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
