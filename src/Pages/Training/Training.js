import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styleTraining from "./Training.module.css";
import jsonData from '../../Utils.json';

const Training = () => {
  const navigate = useNavigate();
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    setTrainees(jsonData);
  }, []);

  return (
    <div className={styleTraining.parentBox}>
      <div className={styleTraining.mainbox}>
        <table className={styleTraining.table}>
          <thead className={styleTraining.thead}>
            <tr className={styleTraining.tr}>
              <th className={styleTraining.th}>Technology</th>
              <th className={styleTraining.th}>Activity Name</th>
              <th className={styleTraining.th}>Topic</th>
              <th className={styleTraining.th}>SubTopic</th>
              <th className={styleTraining.th}>Due Date</th>
              <th className={styleTraining.th}>Resource Link</th>
              <th className={styleTraining.th}>Description</th>
              <th className={styleTraining.th}>Status</th>
              <th className={styleTraining.th}>Edit</th>
            </tr>
          </thead>
          <tbody className={styleTraining.tbody}>
            {trainees.map((trainee, index) => (
              <tr key={index}>
                <td className={styleTraining.td}>{trainee.tech}</td>
                <td className={styleTraining.td}>{trainee.activity_name}</td>
                <td className={styleTraining.td}>{trainee.topic_name}</td>
                <td className={styleTraining.td}>{trainee.sub_topic_name}</td>
                <td className={styleTraining.td}>{trainee.due_date}</td>
                <td className={styleTraining.td}>
                  <a href={trainee.resource_link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td >
                <td className={styleTraining.td}>{trainee.activity_description}</td>
                <td className={styleTraining.td}>{trainee.status_name}</td>
                <td className={styleTraining.td}>
                  <button className={styleTraining.editBtn} onClick={() => navigate(`/edit`, { state: { trainee } })}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Training;
