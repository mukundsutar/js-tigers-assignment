import React from "react";
import Bell from "../assets/icons/bell.svg";
import KeyDownArrow from "../assets/icons/key-down-arrow.svg";
import ProfilePicture from "../assets/profilePicture.svg";
import Image from "next/image";

const BellIcon = ({ circleColor, bellColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={bellColor}
  >
    <path
      d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-420ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v13q-11 22-16 45t-4 47q-10-2-19.5-3.5T480-720q-66 0-113 47t-47 113v280h320v-257q18 8 38.5 12.5T720-520v240h80v80H160Zm560-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"
      fill={circleColor} // This line changes the color of the circle
    />
  </svg>
);

export default function Navbar() {
  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-[#F1F1F1] text-black shadow">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none space-x-3">
          <button className="btn btn-square btn-ghost">
            <Image src={Bell} width={24} height={24} color="#000" alt="bell icon placeholder" />
          </button>

          {/* avatar */}

          <button className="btn btn-ghost w-fit space-x-2 px-2">
            <Image src={ProfilePicture} width={45} height={45} alt="profile picture placeholder"/>

            <div className="flex flex-col items-start">
              <p className="text-sm">Edward William</p>
              <p className="text-xs">Admin</p>
            </div>

            <Image src={KeyDownArrow} width={24} height={24} alt="key down arrow icon placeholder"/>
          </button>
        </div>
      </div>
    </>
  );
}
