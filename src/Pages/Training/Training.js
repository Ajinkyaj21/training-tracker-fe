import React, { useState } from 'react';
import styleTraining from "./Training.module.css";

const trainees = [
    {
        ActivityName: "ToDoList",
        Topic: "React",
        SubTopic: "Hooks",
        Description: "XYZ",
        Comments: "1.Unresolved 2.Unresolved",
        Status: "NotStarted"
    },
    {
        ActivityName: "WeatherApp",
        Topic: "React",
        SubTopic: "Hooks",
        Description: "XYZ",
        Comments: "1.Unresolved 2.Unresolved",
        Status: "Inprogress"
    },
    // Add more trainees here
];

const Training = () => {
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTrainees = trainees.filter((trainee) => {
        if (selectedStatus === "All" || trainee.Status === selectedStatus) {
            return trainee.ActivityName.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    });

    return (
        <div className={styleTraining.mainbox}>
            <div className={styleTraining.techCard}>
                <h2>Tech 1</h2>
                <div className={styleTraining.traineeCards}>
                    {filteredTrainees.map((trainee, index) => (
                        <div key={index} className={styleTraining.traineeCard}>
                            <h3>{trainee.ActivityName}</h3>
                            <p>Topic: {trainee.Topic}</p>
                            <p>SubTopic: {trainee.SubTopic}</p>
                            <p>Description: {trainee.Description}</p>
                            <p>Comments: {trainee.Comments}</p>
                            <p>Status: {trainee.Status}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styleTraining.techCard}>
                <h2>Tech 2</h2>
                <div className={styleTraining.traineeCards}>
                    {filteredTrainees.map((trainee, index) => (
                        <div key={index} className={styleTraining.traineeCard}>
                            <h3>{trainee.ActivityName}</h3>
                            <p>Topic: {trainee.Topic}</p>
                            <p>SubTopic: {trainee.SubTopic}</p>
                            <p>Description: {trainee.Description}</p>
                            <p>Comments: {trainee.Comments}</p>
                            <p>Status: {trainee.Status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Training;
