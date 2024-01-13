import axios from 'axios';
// import Cookies from 'js-cookie';
// const NodeURL = 'http://localhost:9090';
const NodeURL = 'https://d40vhfq2-9090.inc1.devtunnels.ms';

/* Review: I dont think this will work because this is defining variable at global level.
	If user sign in then also this will not change.*/
const loginisAdmin = localStorage.getItem("is_admin");
const headers = {
	'authorization': `Bearer ${localStorage.getItem('token')}`,
	withCredntials: true,
	credentials: 'include'
};

export const loginDatas = (formData) => {
	const params = {
		email: formData.email,
		password: formData.password
	};
	return axios.post(`${NodeURL}/user/login`, params);
};

export const login = async (email, password) => {
	const response = await axios.post(`${NodeURL}/user/login`, {
		email: email,
		password: password
	});
	return response.data;
};

export const tech = async() => {
	const response = await axios.get(`${NodeURL}/tech/`, { headers });
	return response.data;
};

export const saveActivities = async (dataToSend) => {
	const response = await axios.post(`${NodeURL}/trainingPlan/saveActivities/`, dataToSend, { headers });
	return response;
};

// Review: create two separate functions call based on checking admin in the page, not here
export const fetchTraineeData = async () => {
	const endpoint = loginisAdmin == 1 ? 'activeTraineesAdmin' : 'activeTraineesUser';
	const response = await axios.get(`${NodeURL}/trainee/${endpoint}?activityType=active`, { headers });
	return response.data;
};

// Review: create two separate functions call based on checking admin in the page, not here
export const fetchTraineeDataOld = async () => {
	const endpoint = loginisAdmin == 1 ? 'activeTraineesAdmin' : 'activeTraineesUser';
	const response = await axios.get(`${NodeURL}/trainee/$${endpoint}?activityType=old`, { headers });
	return response.data;
};

export const addUser = async (email, password, userName) => {
	const response = await axios.post(`${NodeURL}/user/addUser/`, {
		userName: userName,
		email: email,
		password: password
	}, { headers });
	return response.data;
};

export const getActivities = async (selectedTrainee, selectedTrainer, selectedTechnology) => {
	const response = await axios.post(`${NodeURL}/acti/getActivities/`, {
		traineeId: selectedTrainee,
		"trainer_id": selectedTrainer,
		"tech_id": selectedTechnology
	}, { headers });
	return response.data;
};

export const trainee = async() => {
	const response = await axios.get(`${NodeURL}/trainee/`, { headers });
	return response.data;
};

export const fetchDashboard = async () => {
	const response = await axios.get(`${NodeURL}/tech/myTraining`, { headers });
	return response.data;
};

export const fetchTraineeDataTrainingDropDown = async () => {
	const response = await axios.get(`${NodeURL}/trainee/getStatus`, { headers });
	return response.data;
};

export const fetchTraineeDataTrainingCards = async (setSelectedValue) => {
	const response = await axios.post(`${NodeURL}/trainingPlan/getTrainingActivities`, {
		"status_id": parseInt(setSelectedValue)
	}, { headers });
	return response.data;
};