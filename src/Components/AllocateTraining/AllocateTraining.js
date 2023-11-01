import React, { useEffect, useState } from "react";
import stylesAT from "./AllocateTraining.module.css";
import { btnActivities, saveDataApi, tech, trainee } from "../../Api";

const AllocateTraining = () => {
  const [selectedTrainee, setSelectedTrainee] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [trial, setTrial] = useState([]);
  const [technologyOptions, setTechnologyOptions] = useState([]);
  const [activites, setActivites] = useState([]);
  const [requiredStates, setRequiredStates] = useState(
    activites.map(() => true)
  );
  const [activityDueDates, setActivityDueDates] = useState([]);

  useEffect(() => {
    handleSubmit();
    fetchTechnologyOptions();
  }, []);

  const handleRequiredChange = (index) => {
    setRequiredStates((prevRequiredStates) => {
      const updatedRequiredStates = [...prevRequiredStates];
      updatedRequiredStates[index] = !updatedRequiredStates[index];
      return updatedRequiredStates;
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await trainee();
      console.log("API Response:", response);
      const temp = response.map((el) => ({
        label: el.user_name,
        value: el.user_id,
      }));
      setTrial(temp);
      console.log(temp, "temp");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const fetchTechnologyOptions = async () => {
    try {
      const techResponse = await tech();
      const temp2 = techResponse.map((el) => ({
        label: el.technology,
        value: el.tech_id,
      }));
      setTechnologyOptions(temp2);
    } catch (error) {
      console.error("Error fetching technology data:", error);
    }
  };

  const handleSelectChange = (event, setSelectedState) => {
    setSelectedState(event.target.value);
  };

  const handleGetActivities = async () => {
    if (selectedTrainee && selectedTrainer && selectedTechnology) {
      try {
        const responseActivites = await btnActivities(
          selectedTrainee,
          selectedTrainer,
          selectedTechnology
        );

        if (responseActivites !== null) {
          const activitiesres = responseActivites;
          setActivites(activitiesres);

          // Initialize activityDueDates with default empty dates
          const initialDueDates = new Array(activitiesres.length).fill("");
          setActivityDueDates(initialDueDates);
        } else {
          console.error(
            "Error getting activities:",
            responseActivites.statusText
          );
        }
      } catch (error) {
        console.error("Error getting activities: hiiiiiiiiiiii", error);
      }
    } else {
      alert(
        "Please select values for all dropdowns before getting activities."
      );
    }
  };

  const handleSave = async () => {
    console.log(activites, "rog");
    if (activites.length > 0) {
      const dataToSend = {
        tech_id: selectedTechnology,
        trainee_id: selectedTrainee,
        trainer_id: selectedTrainer,
        activities: activites.map((activity, index) => ({
          activity_id: activity.activity_id,
          due_date: activityDueDates[index], // Use the corresponding date from activityDueDates
          required: requiredStates[index] ? 1 : 0,
        })),
      };
  
      try {
        const response = await saveDataApi(dataToSend);
  
        if (response.status === 200) {
          console.log("Data saved successfully!", response);
        } else {
          console.error("Error saving data:", response.statusText);
        }
      } catch (error) {
        console.error("Error saving data:", error);
      }
    } else {
      alert("No activities to save.");
    }
  };
  
  const allDueDatesFilled = activityDueDates.every((date) => date.trim() !== "");
  return (
    <>
      <div className={stylesAT.topContainer}>
        {[
          {
            name: "Select Trainee",
            options: trial,
            selectedValue: selectedTrainee,
            setSelectedValue: setSelectedTrainee,
          },
          {
            name: "Select Trainer",
            options: trial,
            selectedValue: selectedTrainer,
            setSelectedValue: setSelectedTrainer,
          },
          {
            name: "Select Technology",
            options: technologyOptions,
            selectedValue: selectedTechnology,
            setSelectedValue: setSelectedTechnology,
          },
        ].map((dropdown, index) => (
          <div key={index} className={stylesAT.dropdown}>
            <select
              value={dropdown.selectedValue}
              onChange={(event) =>
                handleSelectChange(event, dropdown.setSelectedValue)
              }
            >
              <option value="">{dropdown.name}</option>
              {dropdown.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button className={stylesAT.actBtn} onClick={handleGetActivities}>
          Get Activities
        </button>
      </div>
      <div className={stylesAT.actBox}>
        {activites.length > 0 ? (
          <table className={stylesAT.tableMain}>
            <thead>
              <tr>
                <th className={stylesAT.th}>Trainee</th>
                <th className={stylesAT.th}>Trainer</th>
                <th className={stylesAT.th}>Technology</th>
                <th className={stylesAT.th}>Topic</th>
                <th className={stylesAT.th}>Sub Topic</th>
                <th className={stylesAT.th}>Activity</th>
                <th className={stylesAT.th}>Due Date</th>
                <th className={stylesAT.th}>Required</th>
              </tr>
            </thead>
            <tbody>
              {console.log(activites, "hola")}
              {activites.map((activity, index) => (
                <tr key={index}>
                  {index === 0 && (
                    <>
                      <td
                        rowSpan={activites.length}
                        className={stylesAT.tdInner}
                      >
                        {/* {selectedTrainee} */}
                        {trial.map((el) => {
                          if (el.value == selectedTrainee) {
                            console.log("ok", el);
                            return <>{el.label}</>;
                          } else {
                            return null;
                          }
                        })}
                      </td>
                      <td
                        rowSpan={activites.length}
                        className={stylesAT.tdInner}
                      >
                        {/* {selectedTrainer} */}
                        {trial.map((el) => {
                          if (el.value == selectedTrainer) {
                            console.log("ok", el);
                            return <>{el.label}</>;
                          } else {
                            return null;
                          }
                        })}
                      </td>
                      <td
                        rowSpan={activites.length}
                        className={stylesAT.tdInner}
                      >
                        {activity.technology}
                      </td>
                    </>
                  )}
                  <td className={stylesAT.td}>{activity.topic}</td>
                  <td className={stylesAT.td}>{activity.sub_topic}</td>
                  <td className={stylesAT.td}>{activity.activity}</td>
                  <td className={stylesAT.td}>
                    <input
                      type="date"
                      name="dueDate"
                      value={activityDueDates[index]}
                      onChange={(e) => {
                        const newDueDates = [...activityDueDates];
                        newDueDates[index] = e.target.value;
                        setActivityDueDates(newDueDates);
                      }}
                    />
                  </td>
                  <td className={stylesAT.td}>
                    <input
                      type="checkbox"
                      name="required"
                      checked={requiredStates[index]}
                      onChange={() => handleRequiredChange(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={stylesAT.p}>
            No activities to display. Please click "Get Activities" to fetch
            data.
          </p>
        )}
        {activites.length > 0 && (
          <div className={stylesAT.mainDiv}>
            <div className={stylesAT.btnDiv}>
              <button
            className={stylesAT.saveBtn}
            onClick={handleSave}
            disabled={!allDueDatesFilled}
          >
            Save
          </button>
          </div>
          <div className={stylesAT.messageDiv}>{!allDueDatesFilled && (
            <p className={stylesAT.errorText}>
              Please enter due dates for all activities before saving.
            </p>
          )}</div>
          
        </div>
        )}
      </div>
    </>
  );
};

export default AllocateTraining;
