import React, { useState, useEffect } from "react";
import {
  fetchTraineeDataTrainingCards,
  fetchTraineeDataTrainingDropDown,
} from "../../Api";
import TrainingStyles from "./Training.module.css";
import Trainingcards from "./Trainingcards";

function Dropdown() {
  const [trainees, setTrainees] = useState([]);
  const [selectedValue, setSelectedValue] = useState(-1);
  const [showAllTrainees, setShowAllTrainees] = useState([]);
  const [allTraineeKeys, setAlltraineeKeys] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const data = await fetchTraineeDataTrainingDropDown();
      setTrainees(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  useEffect(() => {
    const fetchDataFromAPIDisplay = async () => {
      try {
        console.log(selectedValue, "selected Valueeeee");
        const data = await fetchTraineeDataTrainingCards(selectedValue);
        console.log(data, "continue");
        setShowAllTrainees(data);
        setAlltraineeKeys(Object.keys(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPIDisplay();
  }, [selectedValue]);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  return (
    <div className={TrainingStyles.main}>
      <label>Select a trainee:</label>
      <select
        className={TrainingStyles.select}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value={-1}>All</option>
        {trainees.map((trainee) => (
          <option key={trainee.status_id} value={trainee.status_id}>
            {trainee.status_display}
          </option>
        ))}
      </select>

      <div className={TrainingStyles.TrainingCardsPage}>
        <h1>Programming Activities</h1>
        {allTraineeKeys.map((el) => (
          <Trainingcards activities={showAllTrainees[el]} language={el} />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
