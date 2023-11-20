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

  const filteredTrainees = trainees.filter((trainee) =>
    trainee.trainee_name.toLowerCase().includes(searchQuery?.toLowerCase()) 
  );

  console.log("Search QueryActive:", searchQuery);
console.log("Filtered Trainees:", filteredTrainees);

  return (
    // trainees.length > 0 &&
    <div className={stylesOldT.main1}>
      {filteredTrainees.length > 0 &&  filteredTrainees.map((trainee, index) => (
        // <div className={stylesActiveT.main}>
          <div className={stylesOldT.card}>
            <div className={stylesOldT.left}>
              <div className={stylesOldT.upper}>
                <h4>Name: {trainee.trainee_name}</h4>
                <p>Trained By: {trainee.trained_by}</p>
              </div>
              <div className={stylesOldT.lower}>
                <div className={stylesOldT.comments}>
                  <div className={stylesOldT.innerComments}>
                    <p className={stylesOldT.p}>{trainee.unresolved_comments}</p>
                    <p className={stylesOldT.p}>Unresolved comments</p>
                  </div>
                  <div className={stylesOldT.innerComments}>
                  <p className={stylesOldT.p}>{trainee.delayed_activities}</p>
                  <p className={stylesOldT.p}>Unreviwed comments</p>
                  </div>

                  <div className={stylesOldT.innerComments}>
                  <p className={stylesOldT.p}>{trainee.activities_not_started}</p>
                  <p className={stylesOldT.p}>Activites not Started</p>
                  </div>

                  <div className={stylesOldT.innerComments}>
                  <p className={stylesOldT.p}>{trainee.ununreviewed_statusresolved_comments}</p>
                  <p className={stylesOldT.p}>Activites Delay</p>
                  </div>
               
                </div>
              </div>
            </div>
            <div className={stylesOldT.right}>
              <p className={stylesOldT.p}>{trainee.Completed_Activities_Percentage}%Completed</p>
              <p className={stylesOldT.p}>Start Date:{trainee.last_due_Date}</p>
              
              <p className={stylesOldT.p}>End Date:{trainee.last_due_Date}</p>
              <p className={stylesOldT.p}>Technology:{trainee.technology}</p>
             
            </div>
          </div>
        // </div>
      ))}
    </div>
  );
};

export default OldTrainee;
