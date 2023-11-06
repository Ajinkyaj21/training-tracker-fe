import axios from "axios";
import Cookies from 'js-cookie'; 
const BASE_URL ="https://training-tracker.cyclic.app"
// https://training-tracker.cyclic.app/
// https://0975-103-167-184-195.ngrok.io

const tokenCookie = Cookies.get('token');
localStorage.setItem('token', tokenCookie);

// Retrieve the token from localStorage
const token = localStorage.getItem('token');

// console.log("Token", token);

const headers = {
  'Authorization': `Bearer ${token}`,
};

export const login = async (email, password) => {
    const response = await axios.post(BASE_URL + "/user/login",{
      email: email,  
      password: password,
    },{
      withCredntials: true,
      credentials: 'include',
      headers
});
    return response.data;
  };

export const trainee = async() =>{
  const response = await axios.post(BASE_URL + "/trainee/",{},{
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
}

export const tech = async() =>{
  const response = await axios.post(BASE_URL + "/tech/",{},{
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
}

export const btnActivities = async (selectedTrainee, selectedTrainer, selectedTechnology) => {
  const response = await axios.post(BASE_URL + "/acti/getActivities/", {
    trainee_id: selectedTrainee,
    trainer_id: selectedTrainer,
    tech_id: selectedTechnology,
  },{
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;
} 

export const addUser = async (email, password) => {
  const response = await axios.post(BASE_URL + "/user/addUser/", {
    email: email,
    password: password,
  },{
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
};

export const saveDataApi = async (dataToSend) => {
  
    const response = await axios.post(`${BASE_URL}/trainingPlan/saveActivities/`, dataToSend,{
      withCredntials: true,
      credentials: 'include',
      headers
    });
    return response;
};
export const fetchTraineeData = async () => {
    const response = await axios.post(BASE_URL + "/trainee/active?activityType=active",{},{
		withCredntials: true,
		credentials: 'include',
		headers
    });
    return response.data;
  
};

export const fetchTraineeDataTraining = async () => {
  const response = await axios.post(BASE_URL + "/trainingPlan/getTrainingActivities",{},{
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;

};

export const saveData = async (dataToSend) => {
  
  const response = await axios.post(`${BASE_URL}/trainingPlan/saveActivities/`, dataToSend,{
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response;
};
export default BASE_URL;


// ,{withCredentials: true}