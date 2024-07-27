"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";

export default function TableDisplay() {
  const tableData = [
    {
      id: 1,
      hbl_no: "EGOSZX23050310",
      mbl_no: "ZIMUSHH31044831",
      po_ref_no: "MTD062214",
      recipt: "YANTIAN, CHINA",
      recipt_date: "2024-06-22",
      loading: "YANTIAN, CHINA",
      loading_date: "2024-06-22",
      discharge: "LONG BEACH, CA",
      discharge_date: "2024-07-15",
      delivery: "LONG BEACH, CA",
      delivery_date: "2024-07-15",
      booking_no: "ZIMUSHH31044831",
      booking_date: "2024-06-22",
      booking_status: "BOOKED",
      size_type: "40HC",
      carrier: "ZIM",
      commodity: "FURNITURE",
      milestone: "BOOKED",
      milestone_group: "BOOKING",
      shipper: "SHENZHEN YONGXIN IMPORT & EXPORT CO.,LTD",
      consignee: "SHENZHEN YONGXIN IMPORT & EXPORT CO.,LTD",
      created_at: "2024-06-22",
      updated_at: "2024-07-15",
      estimated_time_of_departure: "2024-06-22",
      estimated_time_of_arrival: "2024-07-15",
      actual_time_of_departure: "2024-06-22",
      actual_time_of_arrival: "2024-07-15",
    },
    {
      id: 2,
      hbl_no: "EGOSZX23050311",
      mbl_no: "MSCFRM31044832",
      po_ref_no: "MTD062215",
      recipt: "SHANGHAI, CHINA",
      recipt_date: "2024-06-23",
      loading: "SHANGHAI, CHINA",
      loading_date: "2024-06-23",
      discharge: "LOS ANGELES, CA",
      discharge_date: "2024-07-16",
      delivery: "LOS ANGELES, CA",
      delivery_date: "2024-07-16",
      booking_no: "MSCFRM31044832",
      booking_date: "2024-06-23",
      booking_status: "CANCELLED",
      size_type: "40HC",
      carrier: "MSC",
      commodity: "ELECTRONICS",
      milestone: "DISCHARGED",
      milestone_group: "DISCHARGED",
      shipper: "SHANGHAI ELECTRONICS CO.,LTD",
      consignee: "SHANGHAI ELECTRONICS CO.,LTD",
      created_at: "2024-06-23",
      updated_at: "2024-07-16",
      estimated_time_of_departure: "2024-06-23",
      estimated_time_of_arrival: "2024-07-16",
      actual_time_of_departure: "2024-06-23",
      actual_time_of_arrival: "2024-07-16",
    },
    {
      id: 3,
      hbl_no: "EGOSZX23050312",
      mbl_no: "MAEUHH31044833",
      po_ref_no: "MTD062216",
      recipt: "NINGBO, CHINA",
      recipt_date: "2024-06-24",
      loading: "NINGBO, CHINA",
      loading_date: "2024-06-24",
      discharge: "SEATTLE, WA",
      discharge_date: "2024-07-17",
      delivery: "SEATTLE, WA",
      delivery_date: "2024-07-17",
      booking_no: "MAEUHH31044833",
      booking_date: "2024-06-24",
      booking_status: "BOOKED",
      size_type: "20GP",
      carrier: "MAERSK",
      commodity: "TEXTILES",
      milestone: "DELIVERED",
      milestone_group: "DELIVERY",
      shipper: "NINGBO TEXTILES CO.,LTD",
      consignee: "NINGBO TEXTILES CO.,LTD",
      created_at: "2024-06-24",
      updated_at: "2024-07-17",
      estimated_time_of_departure: "2024-06-24",
      estimated_time_of_arrival: "2024-07-17",
      actual_time_of_departure: "2024-06-24",
      actual_time_of_arrival: "2024-07-17",
    },
    {
      id: 4,
      hbl_no: "EGOSZX23050313",
      mbl_no: "COSUHH31044834",
      po_ref_no: "MTD062217",
      recipt: "DALIAN, CHINA",
      recipt_date: "2024-06-25",
      loading: "DALIAN, CHINA",
      loading_date: "2024-06-25",
      discharge: "OAKLAND, CA",
      discharge_date: "2024-07-18",
      delivery: "OAKLAND, CA",
      delivery_date: "2024-07-18",
      booking_no: "COSUHH31044834",
      booking_date: "2024-06-25",
      booking_status: "BOOKED",
      size_type: "40HC",
      carrier: "COSCO",
      commodity: "AUTOMOTIVE PARTS",
      milestone: "ARRIVED",
      milestone_group: "ARRIVAL",
      shipper: "DALIAN AUTOMOTIVE CO.,LTD",
      consignee: "DALIAN AUTOMOTIVE CO.,LTD",
      created_at: "2024-06-25",
      updated_at: "2024-07-18",
      estimated_time_of_departure: "2024-06-25",
      estimated_time_of_arrival: "2024-07-18",
      actual_time_of_departure: "2024-06-25",
      actual_time_of_arrival: "2024-07-18",
    },
    {
      id: 5,
      hbl_no: "EGOSZX23050314",
      mbl_no: "ONEUSH31044835",
      po_ref_no: "MTD062218",
      recipt: "QINGDAO, CHINA",
      recipt_date: "2024-06-26",
      loading: "QINGDAO, CHINA",
      loading_date: "2024-06-26",
      discharge: "HOUSTON, TX",
      discharge_date: "2024-07-19",
      delivery: "HOUSTON, TX",
      delivery_date: "2024-07-19",
      booking_no: "ONEUSH31044835",
      booking_status: "BOOKED",
      booking_date: "2024-06-26",
      size_type: "20GP",
      carrier: "ONE",
      commodity: "MACHINERY",
      milestone: "ARRIVED",
      milestone_group: "ARRIVAL",
      shipper: "QINGDAO MACHINERY CO.,LTD",
      consignee: "QINGDAO MACHINERY CO.,LTD",
      created_at: "2024-06-26",
      updated_at: "2024-07-19",
      estimated_time_of_departure: "2024-06-26",
      estimated_time_of_arrival: "2024-07-19",
      actual_time_of_departure: "2024-06-26",
      actual_time_of_arrival: "2024-07-19",
    },
    {
      id: 6,
      hbl_no: "EGOSZX23050315",
      mbl_no: "CMAUSH31044836",
      po_ref_no: "MTD062219",
      recipt: "TIANJIN, CHINA",
      recipt_date: "2024-06-27",
      loading: "TIANJIN, CHINA",
      loading_date: "2024-06-27",
      discharge: "NEW YORK, NY",
      discharge_date: "2024-07-20",
      delivery: "NEW YORK, NY",
      delivery_date: "2024-07-20",
      booking_no: "CMAUSH31044836",
      booking_status: "BOOKED",
      booking_date: "2024-06-27",
      size_type: "40HC",
      carrier: "CMA CGM",
      commodity: "PLASTICS",
      milestone: "RETURNED",
      milestone_group: "RETURN",
      shipper: "TIANJIN PLASTICS CO.,LTD",
      consignee: "TIANJIN PLASTICS CO.,LTD",
      created_at: "2024-06-27",
      updated_at: "2024-07-20",
      estimated_time_of_departure: "2024-06-27",
      estimated_time_of_arrival: "2024-07-20",
      actual_time_of_departure: "2024-06-27",
      actual_time_of_arrival: "2024-07-20",
    },
    {
      id: 7,
      hbl_no: "EGOSZX23050316",
      mbl_no: "HLCUHH31044837",
      po_ref_no: "MTD062220",
      recipt: "XIAMEN, CHINA",
      recipt_date: "2024-06-28",
      loading: "XIAMEN, CHINA",
      loading_date: "2024-06-28",
      discharge: "MIAMI, FL",
      discharge_date: "2024-07-21",
      delivery: "MIAMI, FL",
      delivery_date: "2024-07-21",
      booking_no: "HLCUHH31044837",
      booking_status: "BOOKED",
      booking_date: "2024-06-28",
      size_type: "20GP",
      carrier: "HAPAG LLOYD",
      commodity: "FOOD",
      milestone: "RETURNED",
      milestone_group: "RETURN",
      shipper: "XIAMEN FOOD CO.,LTD",
      consignee: "XIAMEN FOOD CO.,LTD",
      created_at: "2024-06-28",
      updated_at: "2024-07-21",
      estimated_time_of_departure: "2024-06-28",
      estimated_time_of_arrival: "2024-07-21",
      actual_time_of_departure: "2024-06-28",
      actual_time_of_arrival: "2024-07-21",
    },
    {
      id: 8,
      hbl_no: "EGOSZX23050317",
      mbl_no: "HDMUHH31044838",
      po_ref_no: "MTD062221",
      recipt: "GUANGZHOU, CHINA",
      recipt_date: "2024-06-29",
      loading: "GUANGZHOU, CHINA",
      loading_date: "2024-06-29",
      discharge: "CHARLESTON, SC",
      discharge_date: "2024-07-22",
      delivery: "CHARLESTON, SC",
      delivery_date: "2024-07-22",
      booking_no: "HDMUHH31044838",
      booking_status: "BOOKED",
      booking_date: "2024-06-29",
      size_type: "40HC",
      carrier: "HYUNDAI",
      commodity: "CLOTHING",
      milestone: "RETURNED",
      milestone_group: "RETURN",
      shipper: "GUANGZHOU CLOTHING CO.,LTD",
      consignee: "GUANGZHOU CLOTHING CO.,LTD",
      created_at: "2024-06-29",
      updated_at: "2024-07-22",
      estimated_time_of_departure: "2024-06-29",
      estimated_time_of_arrival: "2024-07-22",
      actual_time_of_departure: "2024-06-29",
      actual_time_of_arrival: "2024-07-22",
    },
    {
      id: 9,
      hbl_no: "EGOSZX23050318",
      mbl_no: "APLUHH31044839",
      po_ref_no: "MTD062222",
      recipt: "SHENZHEN, CHINA",
      recipt_date: "2024-06-30",
      loading: "SHENZHEN, CHINA",
      loading_date: "2024-06-30",
      discharge: "SAVANNAH, GA",
      discharge_date: "2024-07-23",
      delivery: "SAVANNAH, GA",
      delivery_date: "2024-07-23",
      booking_no: "APLUHH31044839",
      booking_status: "BOOKED",
      booking_date: "2024-06-30",
      size_type: "20GP",
      carrier: "APL",
      commodity: "CHEMICALS",
      milestone: "RETURNED",
      milestone_group: "RETURN",
      shipper: "SHENZHEN CHEMICALS CO.,LTD",
      consignee: "SHENZHEN CHEMICALS CO.,LTD",
      created_at: "2024-06-30",
      updated_at: "2024-07-23",
      estimated_time_of_departure: "2024-06-30",
      estimated_time_of_arrival: "2024-07-23",
      actual_time_of_departure: "2024-06-30",
      actual_time_of_arrival: "2024-07-23",
    },
    {
      id: 10,
      hbl_no: "EGOSZX23050319",
      mbl_no: "OOCLHH31044840",
      po_ref_no: "MTD062223",
      recipt: "BEIJING, CHINA",
      recipt_date: "2024-07-01",
      loading: "BEIJING, CHINA",
      loading_date: "2024-07-01",
      discharge: "NORFOLK, VA",
      discharge_date: "2024-07-24",
      delivery: "NORFOLK, VA",
      delivery_date: "2024-07-24",
      booking_no: "OOCLHH31044840",
      booking_status: "BOOKED",
      booking_date: "2024-07-01",
      size_type: "40HC",
      carrier: "OOCL",
      commodity: "PHARMACEUTICALS",
      milestone: "RETURNED",
      milestone_group: "RETURN",
      shipper: "BEIJING PHARMACEUTICALS CO.,LTD",
      consignee: "BEIJING PHARMACEUTICALS CO.,LTD",
      created_at: "2024-07-01",
      updated_at: "2024-07-24",
      estimated_time_of_departure: "2024-07-01",
      estimated_time_of_arrival: "2024-07-24",
      actual_time_of_departure: "2024-07-01",
      actual_time_of_arrival: "2024-07-24",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const tableRef = useRef(null);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  const maxRows = tableData.length;

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

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

      <div className="overflow-x-auto rounded-t-2xl">
        <table className="table min-w-full overflow-x-scroll" ref={tableRef}>
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
            {currentRows.map((item) => (
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
                <td className={clsx(cellStyle)}>{item.milestone_group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex w-[20%] items-center justify-start space-x-4">
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
            className="btn btn-outline btn-xs"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            «
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`btn btn-outline btn-xs ${currentPage === index + 1 ? "btn-active" : ""}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-outline btn-xs"
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
