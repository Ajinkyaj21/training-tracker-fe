import React from 'react'

const Trainingcards = ({activities,language}) => {
  return (
    <div>
   
    <ul>
        <li key={language}>
          <h2>{language}</h2>
          <ul>
            { activities.map((activity, index) => (
              <li key={index}>
                <h3>{activity.activity_name}</h3>
                <p>Topic: {activity.topic_name}</p>
                <p>Sub-topic: {activity.sub_topic_name}</p>
                <p>Due Date: {activity.due_date}</p>
                <p>Status: {activity.status_name}</p>
                <a href={activity.resource_link} target="_blank" rel="noopener noreferrer">Resource Link</a>
                <p>Description: {activity.activity_description}</p>
              </li>
            ))}
          </ul>
        </li>
      
    </ul>
  </div>
  )
}

export default Trainingcards
