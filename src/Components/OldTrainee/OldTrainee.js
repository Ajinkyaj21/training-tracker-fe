import React, { useEffect, useState } from "react";
import stylesOldT from "./OldTrainee.module.css";
import { fetchTraineeDataOld } from "../../Api";

const OldTrainee = ({ searchQuery }) => {
  const [trainees, setTrainees] = useState([]);

  const fetchDataFromAPI = async () => {
    const data = await fetchTraineeDataOld();
    setTrainees(data);
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    // trainees.length > 0 &&
    <div className={stylesOldT.main}>
      {trainees.length > 0 && trainees.map((trainee, index) => (
        <div className={stylesOldT.main}>
          <div className={stylesOldT.card}>
            <div className={stylesOldT.left}>
              <div className={stylesOldT.upper}>
                <h4>Name: {trainee.trainee_name}</h4>
                <p>Trained By: {trainee.trained_by}</p>
              </div>
              <div className={stylesOldT.lower}>
                <div className={stylesOldT.comments}>
                <p>Unresolved comments:{trainee.unresolved_comments}</p>
                <p>Unreviwed comments:{trainee.delayed_activities}</p>
                <p>Activites not Started:{trainee.activities_not_started}</p>
                <p>Activites Delay:{trainee.ununreviewed_statusresolved_comments}</p>
                </div>
                
              </div>
            </div>
            <div className={stylesOldT.right}>
              <p>
                Completion Percentage: {trainee.Completed_Activities_Percentage}
                %
              </p>
              <p>End Date: {trainee.last_due_Date}</p>
              <p>Technology: {trainee.technology}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OldTrainee;
