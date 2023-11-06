import React, { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import stylesEdit from "./edit.module.css"
import { saveData } from '../../Api';

const Edit = (props) => {
    const location = useLocation();
    const trainee = location.state.trainee;
    console.log(trainee,"trainee");
  
  console.log(trainee, "props");
  const handleSave = async () => {
        
      };
      useEffect(() => {
        
        // saveData();
      }, []);
  return (
    <div className={stylesEdit.mainDiv}>
      <h5>Edit Trainee</h5>
      
        <div >
          <p>Technology: {trainee.tech}</p>
          <p>Activity Name: {trainee.activity_name}</p>
        </div>
      <p>Technology: {trainee.tech}</p>
      <p>Activity Name: {trainee.activity_name}</p>
      <p>Topic: {trainee.activity_name}</p>
      <p>Sub Topic: {trainee.topic_name}</p>
      <p>Descripiton: {trainee.activity_name}</p>
      <p>Comments: {trainee.comments}</p>
      <p>Comments: <input type='text'/></p>
      <p>Due Date:{trainee.due_date}</p>
      <p>Start Date: <input type='date'/></p>
      <p>End Date: <input type='date'/></p>
      <p>Resource Link: {trainee.resource_link}</p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Edit;
