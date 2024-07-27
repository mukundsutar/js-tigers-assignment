import Image from "next/image";
import PDFIcon from "../assets/icons/pdf.svg";
import React from "react";
import date from "date-and-time";

export default function DocumentListItem({ documentData }) {
  const now = new Date(documentData.created_at.substring(0, 10));

  return (
    <>
      <div className="flex h-12 w-full flex-row items-center space-x-4">
        <Image
          src={PDFIcon}
          width={30}
          height={30}
          className="object-contain"
          alt="pdf icon placeholder"
        />

        <div className="flex flex-1 flex-col items-start">
          <div className="text-sm font-bold">{documentData.title}</div>
          <div className="text-sm">{documentData.description}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm">{date.format(now, "MMM DD, YYYY")}</div>
          <div className="text-sm">10:{date.format(now, "DD")} AM</div>
        </div>
      </div>
    </>
  );
}
