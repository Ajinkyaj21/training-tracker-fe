import React, { useState } from "react";
import stylesActiveT from "./ActiveSearch.module.css";

const ActiveTrainee = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const trainees = [
    {
      name: "Gautam ",
      trainedBy: "Ajinkya",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
      completionPercentage: 75,
      technology: "React",
    },
    {
      name: "Varad",
      trainedBy: "Gaurav ",
      startDate: "2023-02-15",
      endDate: "2023-04-15",
      completionPercentage: 60,
      technology: "Node.js",
    },
    {
      name: "Omkar ",
      trainedBy: "Ajinkya",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
      completionPercentage: 75,
      technology: "React",
    },
    {
      name: "Chhagan ",
      trainedBy: "Ajinkya",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
      completionPercentage: 75,
      technology: "React",
    },
    {
      name: "Amruta ",
      trainedBy: "Ajinkya",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
      completionPercentage: 75,
      technology: "React",
    },
  ];

  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className={stylesActiveT.searchContainer}>
        <input
          className={stylesActiveT.inputBar}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={stylesActiveT.cardContainer}>
        {filteredTrainees.map((trainee, index) => (
          <div key={index} className={stylesActiveT.card}>
            <div className="Name">
              <h4>Name: {trainee.name}</h4>
            </div>
            <div className="">
              <p>Trained By: {trainee.trainedBy}</p>
            </div>
            <div className={stylesActiveT.rightBox}>
              <p>Start Date: {trainee.startDate}</p>
              <p>End Date: {trainee.endDate}</p>
              <p>Completion Percentage: {trainee.completionPercentage}%</p>
              <p>Technology: {trainee.technology}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrainee;
