import React, { useEffect, useState } from "react";
import stylesActiveT from "./ActiveSearch.module.css";
import { fetchTraineeData } from "../../Api";

const ActiveTrainee = ({ searchQuery }) => {
  const [trainees, setTrainees] = useState([]);

  const fetchDataFromAPI = async () => {
    const data = await fetchTraineeData();
    setTrainees(data);
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    // trainees.length > 0 &&
    <div className={stylesActiveT.main}>
      {trainees.length > 0 && trainees.map((trainee, index) => (
        <div className={stylesActiveT.main}>
          <div className={stylesActiveT.card}>


            <div className={stylesActiveT.left}>
              <div className={stylesActiveT.upper}>
                <h4>Name: {trainee.trainee_name}</h4>
                <p>Trained By: {trainee.trained_by}</p>
              </div>
              <div className={stylesActiveT.lower}>
                <div className={stylesActiveT.comments}>
                <p>{trainee.unresolved_comments}Unresolved comments</p>
                <p>{trainee.delayed_activities}Unreviwed comments</p>
                <p>{trainee.activities_not_started}Activites not Started</p>
                <p>{trainee.ununreviewed_statusresolved_comments}Activites Delay</p>
                </div>
              </div>
            </div>
            <div className={stylesActiveT.right}>
              <p>{trainee.Completed_Activities_Percentage} % Completed</p>
              <p>End Date: {trainee.last_due_Date}</p>
              <p>Technology: {trainee.technology}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveTrainee;
