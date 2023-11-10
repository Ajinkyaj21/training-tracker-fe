import axios from "axios";
import Cookies from 'js-cookie'; 
const BASE_URL ="https://training-tracker-aj.vercel.app"
// https://training-tracker.cyclic.app/
// https://0975-103-167-184-195.ngrok.io

const tokenCookie = Cookies.get('token');

localStorage.setItem('token', tokenCookie);

// Retrieve the token from localStorage
const token = localStorage.getItem('token');
const loginis_admin = localStorage.getItem("isAdmin")
console.log(loginis_admin,"admin");
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
   localStorage.setItem("isAdmin", response.data.is_admin)
    return response.data;
  };

export const trainee = async() =>{
  const response = await axios.get(BASE_URL + "/trainee/",{
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
}

export const tech = async() =>{
  const response = await axios.get(BASE_URL + "/tech/",{
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

export const addUser = async (email, password,user_name) => {
  const response = await axios.post(BASE_URL + "/user/addUser/", {
    user_name : user_name,
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
  if(loginis_admin == 1 ){
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesAdmin?activityType=active",{
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  }
  else{
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesUser?activityType=active",{
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  }
};


export const fetchTraineeDataOld = async () => {
  if(loginis_admin == 1 ){
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesAdmin?activityType=old",{
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  }
  else{
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesUser?activityType=old",{
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  }
};


export const fetchTraineeDataTrainingDropDown = async () => {
  const response = await axios.get(BASE_URL + "/trainee/getStatus",{
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;

};


export const fetchTraineeDataTrainingCards = async (setSelectedValue) => {
  console.log(setSelectedValue,"heyy");
  const response = await axios.post(BASE_URL + "/trainingPlan/getTrainingActivities",{
    "status_id": parseInt(setSelectedValue) ,
  },{
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