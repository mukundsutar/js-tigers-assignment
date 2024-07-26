"use client";
import React, { useEffect, useState } from "react";

export default function TableDisplay() {
  const [currentRows, setCurrentRows] = useState();
  const [startRow, setStartRow] = useState();
  const [endRow, setEndRows] = useState();

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
  ];

  const maxRows = 26;
  const maxAllowedRows = 5;
  let totalPages = 0;

  if (maxRows % maxAllowedRows == 0) {
    totalPages = maxRows / maxAllowedRows;
  } else {
    let extra = 0;
    extra = maxRows % maxAllowedRows;
    totalPages = (maxRows - extra) / maxAllowedRows;
    totalPages = totalPages + 1;
  }

  console.log(totalPages);

  useEffect(() => {
    setStartRow(0);
    setEndRows(maxAllowedRows);
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
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
            {tableData.map((item, index) => (
              <tr key={index}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>{item.favoriteColor}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <div className="join">
              <input
                className="btn btn-square join-item"
                type="radio"
                name="options"
                aria-label="1"
                defaultChecked
              />
              <input
                className="btn btn-square join-item"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="btn btn-square join-item"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="btn btn-square join-item"
                type="radio"
                name="options"
                aria-label="4"
              />
            </div>
          </tfoot>
        </table>
      </div>
    </>
  );
}
