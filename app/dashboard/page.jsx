import React from "react";
import StatDisplay from "../components/statDisplay";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-full w-full flex-row justify-between bg-[#f1f1f1] px-10 py-5">
        <StatDisplay />
        <StatDisplay />
        <StatDisplay />
        <StatDisplay />
      </div>
    </>
  );
}
