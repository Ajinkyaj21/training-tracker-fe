import axios from "axios";
import Cookies from 'js-cookie';
const BASE_URL = "https://training-tracker-aj.vercel.app";

const tokenCookie = Cookies.get('token');
localStorage.setItem('token', tokenCookie);
const token = localStorage.getItem('token');
const loginisAdmin = localStorage.getItem("isAdmin");
const headers = {
  'Authorization': `Bearer ${token}`

};

export const login = async (email, password) => {
    const response = await axios.post(BASE_URL + "/user/login", {
      email: email,
      password: password
    }, {
      withCredntials: true,
      credentials: 'include',
      headers
});
   localStorage.setItem("isAdmin", response.data.is_admin);
    return response.data;
  };

export const trainee = async() => {
  const response = await axios.get(BASE_URL + "/trainee/", {
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
};

export const tech = async() => {
  const response = await axios.get(BASE_URL + "/tech/", {
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
};

export const btnActivities = async (selectedTrainee, selectedTrainer, selectedTechnology) => {
  const response = await axios.post(BASE_URL + "/acti/getActivities/", {
    traineeId: selectedTrainee,
    trainerId: selectedTrainer,
    techId: selectedTechnology
  }, {
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;
};

export const addUser = async (email, password, userName) => {
  const response = await axios.post(BASE_URL + "/user/addUser/", {
    userName: userName,
    email: email,
    password: password
  }, {
    withCredntials: true,
    credentials: 'include',
    headers
});
  return response.data;
};

export const saveDataApi = async (dataToSend) => {

    const response = await axios.post(`${BASE_URL}/trainingPlan/saveActivities/`, dataToSend, {
      withCredntials: true,
      credentials: 'include',
      headers
    });
    return response;
};
export const fetchTraineeData = async () => {
  if (loginisAdmin == 1 ) {
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesAdmin?activityType=active", {
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  } else {
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesUser?activityType=active", {
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  }
};
export const fetchTraineeDataOld = async () => {
  if (loginisAdmin == 1 ) {
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesAdmin?activityType=old", {
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  } else {
    const response = await axios.get(BASE_URL + "/trainee/activeTraineesUser?activityType=old", {
      withCredntials: true,
      credentials: 'include',
      headers
      });
      return response.data;
  }
};
export const fetchTraineeDataTrainingDropDown = async () => {
  const response = await axios.get(BASE_URL + "/trainee/getStatus", {
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;

};
export const fetchTraineeDataTrainingCards = async (setSelectedValue) => {
  const response = await axios.post(BASE_URL + "/trainingPlan/getTrainingActivities", {
    "status_id": parseInt(setSelectedValue)
  }, {
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;

};

export const saveData = async (dataToSend) => {
  const response = await axios.post(`${BASE_URL}/trainingPlan/saveActivities/`, dataToSend, {
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response;
};
export default BASE_URL;
export const fetchDashboard = async () => {
  const response = await axios.get(BASE_URL + "/tech/myTraining", {
    withCredntials: true,
    credentials: 'include',
    headers
  });
  return response.data;

};

