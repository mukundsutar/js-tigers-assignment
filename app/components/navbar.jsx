import React from "react";
import Bell from "../assets/icons/bell.svg";
import KeyDownArrow from "../assets/icons/key-down-arrow.svg";
import ProfilePicture from "../assets/profilePicture.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-base-100 text-black shadow">
        <div className="flex-1 space-x-2">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            =
          </label>

          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none space-x-3">
          <button className="btn btn-square btn-ghost">
            <Image
              src={Bell}
              width={24}
              height={24}
              alt="bell icon placeholder"
            />
          </button>

          {/* avatar */}

          <button className="btn btn-ghost w-fit space-x-2 px-2">
            <Image
              src={ProfilePicture}
              width={45}
              height={45}
              alt="profile picture placeholder"
            />

            <div className="flex flex-col items-start">
              <p className="text-sm">Edward William</p>
              <p className="text-xs">Admin</p>
            </div>

            <Image
              src={KeyDownArrow}
              width={24}
              height={24}
              alt="key down arrow icon placeholder"
            />
          </button>
        </div>
      </div>
    </>
  );
}
