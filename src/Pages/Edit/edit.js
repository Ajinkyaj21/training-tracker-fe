import React, { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import stylesEdit from "./edit.module.css";
import { saveData } from "../../Api";

const Edit = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const trainee = location.state.trainee;
  console.log(trainee, "trainee");

  console.log(trainee, "props");
  const handleSave = async () => {};
  useEffect(() => {
    // saveData();
  }, []);
  return (
    <div className={stylesEdit.mainDiv}>
      <div className={stylesEdit.h2Div}><h2>Edit  Activity</h2></div>
      
      <div className={stylesEdit.innerMain}>
        <div className={stylesEdit.firstDiv}>
          <div className={stylesEdit.left}>
            <p>Activity Name: {trainee.activity_name}</p>
          </div>
          <div className={stylesEdit.right}>
            <p>dropdown</p>
          </div>
        </div>

        <div className={stylesEdit.secoandDiv}>
          

        <div className={stylesEdit.row1Div}>
        <p>Topic: {trainee.activity_name}</p>
        <p>Due Date:{trainee.due_date}</p>
        </div>
        <div className={stylesEdit.row2Div}>
        <p>Sub Topic: {trainee.topic_name}</p> 
        <p>Start Date: <input type="date" /></p> 
        </div>
        <div className={stylesEdit.row3Div}>
        <p>Descripiton: {trainee.activity_name}</p>
        <p> End Date: <input type="date" /> </p>
        </div>

        
        </div>
        <div className={stylesEdit.thirdDiv}>
          <div className={stylesEdit.comment}>
           
        <p>Comments: {trainee.comments}</p>
            <p>
              Comments: <input type="text" />
            </p>
          </div>
          <div className={stylesEdit.link}>
            <p>Resource Link: {trainee.resource_link}</p>
          </div>
        </div>

        <div className={stylesEdit.fourthDiv}>
          <button className={stylesEdit.btn}>Save</button>
          <button className={stylesEdit.btn} onClick={() => navigate("/training")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
