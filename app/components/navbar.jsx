"use client";
import React from "react";
import Bell from "../assets/icons/bell.svg";
import ProfilePicture from "../assets/profilePicture.svg";
import Image from "next/image";
import HamburgerIcon from "./svgIcons/hamburger";
import KeyDownArrow from "./svgIcons/key_down_arrow";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-base-100 text-black shadow">
        <div className="flex-1 space-x-2 lg:ml-6">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <HamburgerIcon width={"2em"} height={"2em"} />
          </label>

          <div className="text-xl font-bold capitalize">
            {pathname.replace("/", "")}
          </div>
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

          <button className="btn btn-ghost w-fit px-0 lg:space-x-2 lg:px-2">
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

            <KeyDownArrow width={30} height={30} />
          </button>
        </div>
      </div>
    </>
  );
}
