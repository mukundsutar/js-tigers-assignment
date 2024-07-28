"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import KeyLeftArrow from "./svgIcons/key_left_arrow";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../custom-scrollbar.css";

export default function TableDisplay({ shipmentData, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const tableRef = useRef(null);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = shipmentData.slice(indexOfFirstRow, indexOfLastRow);
  const maxRows = shipmentData.length;

  const totalPages = Math.ceil(shipmentData.length / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  const cellStyle = "whitespace-nowrap text-xs py-2 px-6";
  const headerStyle = "whitespace-nowrap text-sm font-[800] px-6";

  return (
    <>
      <div className="flex w-full flex-row justify-end">
        <DownloadTableExcel
          filename="shipment data"
          sheet="shipment"
          currentTableRef={tableRef.current}
        >
          <button className="btn btn-sm m-2 rounded-full bg-secondary px-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
            Download
          </button>
        </DownloadTableExcel>
      </div>

      <div className="rounded-t-2xl">
        <PerfectScrollbar>
          <table className="table min-w-full mb-4" ref={tableRef}>
            {/* head */}
            <thead className="bg-base-100">
              <tr>
                <th className={clsx(headerStyle)}>HBL#</th>
                <th className={clsx(headerStyle)}>MBL#</th>
                <th className={clsx(headerStyle)}>PO# / REF#</th>
                <th className={clsx(headerStyle)}>Recipt</th>
                <th className={clsx(headerStyle)}>Loading</th>
                <th className={clsx(headerStyle)}>Discharge</th>
                <th className={clsx(headerStyle)}>Delivery</th>
                <th className={clsx(headerStyle)}>Booking#</th>
                <th className={clsx(headerStyle)}>Size Type</th>
                <th className={clsx(headerStyle)}>Carrier</th>
                <th className={clsx(headerStyle)}>Commodity</th>
                <th className={clsx(headerStyle)}>Milestone</th>
                <th className={clsx(headerStyle)}>Milestone Group</th>
              </tr>
            </thead>

            <tbody>
              {loading
                ? Array.from({ length: rowsPerPage }).map((_, index) => (
                    <tr key={index}>
                      {Array.from({ length: 13 }).map((_, cellIndex) => (
                        <td key={cellIndex} className={clsx(cellStyle)}>
                          <Skeleton width="100%" className="my-2" />
                        </td>
                      ))}
                    </tr>
                  ))
                : currentRows.map((item) => (
                    <tr key={item.id}>
                      <td className={clsx(cellStyle)}>{item.hbl_no}</td>
                      <td className={clsx(cellStyle)}>{item.mbl_no}</td>
                      <td className={clsx(cellStyle, "font-[500]")}>
                        PO# {item.po_ref_no}
                      </td>
                      <td className={clsx(cellStyle)}>
                        {item.recipt} <br /> {item.recipt_date}
                      </td>
                      <td className={clsx(cellStyle)}>
                        {item.loading} <br />
                        {item.loading_date}
                      </td>
                      <td className={clsx(cellStyle)}>
                        {item.discharge} <br /> {item.discharge_date}
                      </td>
                      <td className={clsx(cellStyle)}>
                        {item.delivery} <br /> {item.delivery_date}
                      </td>
                      <td className={clsx(cellStyle)}>{item.booking_no}</td>
                      <td className={clsx(cellStyle)}>{item.size_type}</td>
                      <td className={clsx(cellStyle)}>{item.carrier}</td>
                      <td className={clsx(cellStyle)}>{item.commodity}</td>
                      <td className={clsx(cellStyle)}>{item.milestone}</td>
                      <td className={clsx(cellStyle)}>
                        {item.milestone_group}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </PerfectScrollbar>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex w-fit items-center justify-start space-x-4">
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="select select-bordered select-sm w-fit max-w-xs text-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>

          <div className="w-fit text-sm">
            {indexOfFirstRow + 1}-{indexOfLastRow} of {maxRows}
          </div>
        </div>

        <div className="btn-group space-x-1">
          <button
            className="btn btn-outline btn-xs w-6 bg-accent text-white"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`border-1 btn btn-outline btn-xs w-6 border-accent text-accent active:border-0 active:bg-accent active:text-white ${currentPage === index + 1 ? "btn-active" : ""}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-outline btn-xs w-6 bg-accent text-white"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
}
