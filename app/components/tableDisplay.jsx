"use client";
import React, { useState } from "react";

export default function TableDisplay() {
  const tableData = [
    {
      id: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      favoriteColor: "Blue",
    },
    {
      id: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      favoriteColor: "Purple",
    },
    { id: 3, name: "Brice Swyre", job: "Tax Accountant", favoriteColor: "Red" },
    {
      id: 4,
      name: "Gretchen Whitmer",
      job: "Software Engineer",
      favoriteColor: "Green",
    },
    {
      id: 5,
      name: "Karen Arnold",
      job: "Project Manager",
      favoriteColor: "Yellow",
    },
    {
      id: 6,
      name: "Paul Brown",
      job: "Marketing Coordinator",
      favoriteColor: "Orange",
    },
    {
      id: 7,
      name: "Sarah Connor",
      job: "Cybersecurity Analyst",
      favoriteColor: "Black",
    },
    { id: 8, name: "Tom Hanks", job: "Actor", favoriteColor: "White" },
    {
      id: 9,
      name: "Emily Blunt",
      job: "Graphic Designer",
      favoriteColor: "Pink",
    },
    {
      id: 10,
      name: "Robert Downey Jr.",
      job: "Consultant",
      favoriteColor: "Silver",
    },
    {
      id: 11,
      name: "Natalie Portman",
      job: "Data Scientist",
      favoriteColor: "Gold",
    },
    {
      id: 12,
      name: "Chris Evans",
      job: "Product Manager",
      favoriteColor: "Teal",
    },
    {
      id: 13,
      name: "Mark Ruffalo",
      job: "Environmental Scientist",
      favoriteColor: "Brown",
    },
    {
      id: 14,
      name: "Scarlett Johansson",
      job: "Actress",
      favoriteColor: "Lavender",
    },
    {
      id: 15,
      name: "Jeremy Renner",
      job: "Architect",
      favoriteColor: "Maroon",
    },
    {
      id: 16,
      name: "Chris Hemsworth",
      job: "Fitness Trainer",
      favoriteColor: "Navy",
    },
    {
      id: 17,
      name: "Tom Holland",
      job: "Web Developer",
      favoriteColor: "Aqua",
    },
    {
      id: 18,
      name: "Zendaya Coleman",
      job: "Model",
      favoriteColor: "Turquoise",
    },
    {
      id: 19,
      name: "Benedict Cumberbatch",
      job: "Doctor",
      favoriteColor: "Cyan",
    },
    { id: 20, name: "Elizabeth Olsen", job: "Nurse", favoriteColor: "Magenta" },
    {
      id: 21,
      name: "Mark Ruffalo",
      job: "Environmental Scientist",
      favoriteColor: "Brown",
    },
    {
      id: 22,
      name: "Scarlett Johansson",
      job: "Actress",
      favoriteColor: "Lavender",
    },
    {
      id: 23,
      name: "Jeremy Renner",
      job: "Architect",
      favoriteColor: "Maroon",
    },
    {
      id: 24,
      name: "Chris Hemsworth",
      job: "Fitness Trainer",
      favoriteColor: "Navy",
    },
    {
      id: 25,
      name: "Tom Holland",
      job: "Web Developer",
      favoriteColor: "Aqua",
    },
    {
      id: 26,
      name: "Zendaya Coleman",
      job: "Model",
      favoriteColor: "Turquoise",
    },
    {
      id: 27,
      name: "Benedict Cumberbatch",
      job: "Doctor",
      favoriteColor: "Cyan",
    },
    { id: 28, name: "Elizabeth Olsen", job: "Nurse", favoriteColor: "Magenta" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#f1f1f1]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>{item.favoriteColor}</td>
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
