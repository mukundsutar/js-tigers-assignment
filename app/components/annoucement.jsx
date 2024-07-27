import React from "react";
import AnnoucementImg from "../assets/annoucement.png";
import Image from "next/image";

export default function Annoucement() {
  return (
    <>
      <div className="mb-4 font-bold">Annoucements</div>
      <div className="text-base">
        Soon you will see latest announcements/new in this section.
      </div>
      <div className="flex h-full w-full items-center justify-center py-6 lg:py-0">
        <Image
          src={AnnoucementImg}
          width={120}
          height={120}
          alt="annoucement placeholder"
        />
      </div>
    </>
  );
}
