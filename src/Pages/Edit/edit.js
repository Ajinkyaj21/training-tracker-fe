import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import stylesEdit from "./edit.module.css";

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [trainee] = useState(location.state?.trainee || {});
  const handleSave = async () => {
  };

  useEffect(() => {
  }, []);

  return (
    <div className={stylesEdit.mainDiv}>
      <div className={stylesEdit.h2Div}>
        <h2>Edit Activity</h2>
      </div>

      <div className={stylesEdit.innerMain}>
        <div className={stylesEdit.firstDiv}>
          <div className={stylesEdit.left}>
            <p>Activity Name: {trainee.activity_name}</p>
          </div>
          <div className={stylesEdit.right}>
            <p>Dropdown or other form elements</p>
          </div>
        </div>

        <div className={stylesEdit.secondDiv}>
        </div>

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

export default Edit;
