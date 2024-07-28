import Image from "next/image";
import PDFIcon from "../assets/icons/pdf.svg";
import React from "react";
import date from "date-and-time";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DocumentListItem({ documentData, loading }) {
  // if (loading) {
  //   return (
  //     <div className="flex h-12 w-full flex-row items-center space-x-4">
  //       <Skeleton circle={true} height={30} width={30} />
  //       <div className="flex flex-1 flex-col items-start">
  //         <Skeleton width={150} height={20} />
  //         <Skeleton width={200} height={15} />
  //       </div>
  //       <div className="flex flex-col items-end">
  //         <Skeleton width={80} height={20} />
  //         <Skeleton width={60} height={15} />
  //       </div>
  //     </div>
  //   );
  // }

  const now = new Date(documentData.created_at.substring(0, 10));

  return (
    <>
      {loading ? (
        <div className="flex h-12 w-full flex-row items-center space-x-4">
          <Skeleton circle={true} height={30} width={30} />
          <div className="flex flex-1 flex-col items-start">
            <Skeleton width={150} height={20} />
            <Skeleton width={200} height={15} />
          </div>
          <div className="flex flex-col items-end">
            <Skeleton width={80} height={20} />
            <Skeleton width={60} height={15} />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
