// import React, { useEffect } from "react";
// import { useLocation,useNavigate } from "react-router-dom";
// import stylesEdit from "./edit.module.css";
// import { saveData } from "../../Api";

// const Edit = (props) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const trainee = location.state.trainee;
//   console.log(trainee, "trainee");

//   console.log(trainee, "props");
//   const handleSave = async () => {};
//   useEffect(() => {
//     // saveData();
//   }, []);
//   return (
//     <div className={stylesEdit.mainDiv}>
//       <div className={stylesEdit.h2Div}><h2>Edit  Activity</h2></div>
      
//       <div className={stylesEdit.innerMain}>
//         <div className={stylesEdit.firstDiv}>
//           <div className={stylesEdit.left}>
//             <p>Activity Name: {trainee.activity_name}</p>
//           </div>
//           <div className={stylesEdit.right}>
//             <p>dropdown</p>
//           </div>
//         </div>

//         <div className={stylesEdit.secoandDiv}>
          

//         <div className={stylesEdit.row1Div}>
//         <p>Topic: {trainee.activity_name}</p>
//         <p>Due Date:{trainee.due_date}</p>
//         </div>
//         <div className={stylesEdit.row2Div}>
//         <p>Sub Topic: {trainee.topic_name}</p> 
//         <p>Start Date: <input type="date" /></p> 
//         </div>
//         <div className={stylesEdit.row3Div}>
//         <p>Descripiton: {trainee.activity_name}</p>
//         <p> End Date: <input type="date" /> </p>
//         </div>

        
//         </div>
//         <div className={stylesEdit.thirdDiv}>
//           <div className={stylesEdit.comment}>
           
//         <p>Comments: {trainee.comments}</p>
//             <p>
//               Comments: <input type="text" />
//             </p>
//           </div>
//           <div className={stylesEdit.link}>
//             <p>Resource Link: {trainee.resource_link}</p>
//           </div>
//         </div>

//         <div className={stylesEdit.fourthDiv}>
//           <button className={stylesEdit.btn}>Save</button>
//           <button className={stylesEdit.btn} onClick={() => navigate("/training")}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Edit;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import stylesEdit from "./edit.module.css";
import { saveData } from "../../Api";

// Define the Edit component
const Edit = () => {
  // Use hooks to get the navigate function and location
  const navigate = useNavigate();
  const location = useLocation();

  // Use state to manage the trainee data
  const [trainee, setTrainee] = useState(location.state?.trainee || {});
  console.log(trainee,"trainee");
  // Define the handleSave function for saving data
  const handleSave = async () => {
    // Implement your save logic using the trainee state
    // e.g., await saveData(trainee);
  };

  // Use useEffect for any additional setup logic
  useEffect(() => {
    // You can perform any additional setup logic here
  }, []);

  // Return the JSX structure for the Edit component
  return (
    <div className={stylesEdit.mainDiv}>
      <div className={stylesEdit.h2Div}>
        <h2>Edit Activity</h2>
      </div>

      <div className={stylesEdit.innerMain}>
        {/* Render the activity details for editing */}
        <div className={stylesEdit.firstDiv}>
          <div className={stylesEdit.left}>
            <p>Activity Name: {trainee.activity_name}</p>
          </div>
          <div className={stylesEdit.right}>
            <p>Dropdown or other form elements</p>
          </div>
        </div>

        {/* Render other activity details for editing */}
        <div className={stylesEdit.secondDiv}>
          {/* ... Other fields for editing ... */}
        </div>

        {/* Render the buttons for saving and canceling */}
        <div className={stylesEdit.fourthDiv}>
          <button className={stylesEdit.btn} onClick={handleSave}>
            Save
          </button>
          <button
            className={stylesEdit.btn}
            onClick={() => navigate("/training")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the Edit component
export default Edit;
