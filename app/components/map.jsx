import React from "react";
import Image from "next/image";
import MapPicture from "../assets/map.png";
import BoatIcon from "./svgIcons/boatIcon";
import AirIcon from "./svgIcons/airIcon";
import LandIcon from "./svgIcons/landIcon";
import PlusIcon from "./svgIcons/plusIcon";
import MinusIcon from "./svgIcons/minusIcon";
import ShipmentBrown from "../assets/icons/shipmentBrown.png";
import ShipmentOrange from "../assets/icons/shipmentOrange.png";
import ShipmentYellow from "../assets/icons/shipmentYellow.png";
import ShipmentGreen from "../assets/icons/shipmentGreen.png";

export default function Map() {
  const locationCoords = [
    {
      coord: "top-[41px] left-[221px] lg:top-[80px] lg:left-[430px]",
      icon: ShipmentBrown,
    },
    {
      coord: "top-[62px] left-[242px] lg:top-[124px] lg:left-[471px]",
      icon: ShipmentOrange,
    },
    {
      coord: "top-[62px] left-[268px] lg:top-[124px] lg:left-[519px]",
      icon: ShipmentOrange,
    },
    {
      coord: "top-[55px] left-[262px] lg:top-[106px] lg:left-[508px]",
      icon: ShipmentYellow,
    },
    {
      coord: "top-[87px] left-[258px] lg:top-[169px] lg:left-[503px]",
      icon: ShipmentGreen,
    },
  ];

  return (
    <>
      <div className="relative rounded-2xl shadow-md">
        <Image
          src={MapPicture}
          width={"auto"}
          height={"auto"}
          className="rounded-2xl"
          alt="map placeholder"
        />

        <select className="select select-sm absolute left-2 top-2 z-10 max-w-xs bg-white text-xs lg:left-5 lg:top-5 lg:w-[15%]">
          <option disabled selected>
            Last Milestones
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>

        <div className="absolute right-2 top-2 flex items-center space-x-1 lg:right-5 lg:top-5 lg:flex-col lg:space-y-2">
          <button className="btn btn-square btn-sm flex items-center justify-center border-0 bg-[#eb5d50] fill-white">
            <BoatIcon />
          </button>
          <button className="btn btn-square btn-sm border-0 bg-white fill-[#616C76] hover:bg-secondary hover:fill-white">
            <AirIcon />
          </button>
          <button className="btn btn-square btn-sm border-0 bg-white fill-[#616C76] hover:bg-secondary hover:fill-white">
            <LandIcon />
          </button>
        </div>

        <div className="join join-vertical absolute bottom-2 right-2 flex w-fit flex-col items-center justify-center lg:bottom-5 lg:right-5">
          <button className="btn join-item btn-sm w-fit fill-accent p-0.5 hover:bg-secondary hover:fill-white">
            <PlusIcon />
          </button>
          <div className="divider m-0 h-0 bg-accent px-1"></div>
          <button className="btn join-item btn-sm w-fit fill-accent p-0.5 hover:bg-secondary hover:fill-white">
            <MinusIcon />
          </button>
        </div>

        <div>
          {locationCoords.map((item, index) => (
            <Image
              key={index}
              src={item.icon}
              width={30}
              height={30}
              className={`absolute ${item.coord} w-4 lg:w-fit`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
