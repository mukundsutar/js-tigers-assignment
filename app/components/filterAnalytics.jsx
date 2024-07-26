import React from "react";

export default function FilterAnalytics(){
  return (
	<>
	   {/* type */}
	   <div className="flex w-[25%] flex-row items-center space-x-5">
            <div className="font-bold">Type</div>
            <select className="select select-bordered select-sm w-full rounded-full">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          {/* date */}
          <div className="flex w-[25%] flex-row items-center space-x-5">
            <div className="font-bold">Date</div>
            <select className="select select-bordered select-sm w-full rounded-full">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          {/* period */}
          <div className="flex w-[25%] flex-row items-center space-x-5">
            <div className="font-bold">Period</div>
            <select className="select select-bordered select-sm w-full rounded-full">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          {/* buttons */}
          <button className="btn btn-outline btn-sm rounded-full border-[#6b120a] px-5 text-xs text-[#6b120a]">
            Cancel
          </button>
          <button className="btn btn-sm rounded-full border-0 bg-[#6b120a] px-5 text-xs text-white">
            Go
          </button>
	</>
  );
}
