import Image from "next/image";
import PDFIcon from "../assets/icons/pdf.svg";
import React from "react";

export default function DocumentListItem() {
  return (
    <>
      <div className="flex h-12 w-full flex-row items-center space-x-4">
        <Image
          src={PDFIcon}
          width={30}
          height={30}
          className="object-contain"
        />

        <div className="flex flex-1 flex-col items-start">
          <div className="text-sm font-bold">Packing List</div>
          <div className="text-sm">Sea job document (IM159075)</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm">Nov 29, 2023</div>
          <div className="text-sm">10:27 AM</div>
        </div>
      </div>
    </>
  );
}
