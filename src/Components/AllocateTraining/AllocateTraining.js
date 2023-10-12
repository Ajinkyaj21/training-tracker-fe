import React, { useEffect, useState } from 'react';
import stylesAT from "./AllocateTraining.module.css"
import axios from 'axios';

const AllocateTraining = () => {
  const [selectedTrainee, setSelectedTrainee] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');


  useEffect(()=>{
    handleSubmit();
  },[])

  const handleSubmit = async () => {

    try {
      const response = await axios.get("https://c736-103-167-184-195.ngrok-free.app/trainee");

      console.log('Response Data:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  const dropdownData = [
    {
      name: 'Select Trainee',
      options: [
        {
          label: 'Gautam',
          value: 'Gautam',
        },
        {
          label: 'Varad',
          value: 'Varad',
        },
      ],
    },
    {
      name: 'Select Trainer',
      options: [
        {
          label: 'Ajinkya',
          value: 'Ajinkya',
        },
        {
          label: 'Gaurav',
          value: 'Gaurav',
        },
      ],
    },
    {
      name: 'Select Technology',
      options: [
        {
          label: 'React',
          value: 'React',
        },
        {
          label: 'NodeJS',
          value: 'NodeJS',
        },
      ],
    },
  ];

  const handleSelectChange = (event, setSelectedState) => {
    setSelectedState(event.target.value);
  };

  return (
    <>
      <div className={stylesAT.container}>
        <div className={stylesAT.topContainer}>
          {dropdownData.map((dropdown, index) => (
            <div key={index} className={stylesAT.dropdown}>
              <select
                value={
                  dropdown.name === 'Select Trainee'
                    ? selectedTrainee
                    : dropdown.name === 'Select Trainer'
                    ? selectedTrainer
                    : selectedTechnology
                }
                onChange={(event) =>
                  handleSelectChange(
                    event,
                    dropdown.name === 'Select Trainee'
                      ? setSelectedTrainee
                      : dropdown.name === 'Select Trainer'
                      ? setSelectedTrainer
                      : setSelectedTechnology
                  )
                }
              >
                <option value="">Select a {dropdown.name}</option>
                {dropdown.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AllocateTraining;