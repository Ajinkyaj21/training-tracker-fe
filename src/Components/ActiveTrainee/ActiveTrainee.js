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
    
    <div className={stylesActiveT.main}>
      {trainees.map((trainee, index) => (
        <div className={stylesActiveT.main}>
          <div className={stylesActiveT.card}>
            <div className={stylesActiveT.left}>
              <div className={stylesActiveT.upper}>
                <h4>Name: {trainee.trainee_name}</h4>
                <p>Trained By: {trainee.trained_by}</p>
              </div>
              <div className={stylesActiveT.lower}>
                <div className={stylesActiveT.comments}>
                <p>Unresolved comments:{trainee.unresolved_comments}</p>
                <p>Unreviwed comments:{trainee.delayed_activities}</p>
                <p>Activites not Started:{trainee.activities_not_started}</p>
                <p>Activites Delay:{trainee.ununreviewed_statusresolved_comments}</p>
                </div>
                
              </div>
            </div>
            <div className={stylesActiveT.right}>
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

export default ActiveTrainee;
