import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Components } from '../../Components';
import CustomButton from "../../Components/Button/CustomButton";
import { addUser } from '../../Services/Api';
import stylesAU from './AddUser.module.css';

const AddUser = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const navigate = useNavigate();

	const handleAdminToggle = () => {
		setIsAdmin(!isAdmin);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await addUser(email, password, userName);
			console.info('Response Data:', response.status);
			// console.info("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
			if (response.success == true) {
				alert("success, User successfully added !");
				navigate('/allocateTraining');
			} else {
				confirm("fail, User is already added !");
				navigate('/addUser');
			}
			// console.info('Response Data:', response.data);
			// alert("success");
			// navigate('/');
		} catch (error) {
			console.error('Error posting data:', error);
			alert("fail, User is already added !");
			navigate('/addUser');
		}
	};

	return (
		<div className={stylesAU.mainContainer}>
			<div className={stylesAU.outerContainer}>
				<form onSubmit={handleSubmit}>
					<h4 className={stylesAU.title}>Add User</h4>
					<div className={stylesAU.inputBoxes} >
						<Components.Input type="text" id={'UserId'} placeholder={'Enter username'} value={userName} onChange={(e) => setUserName(e.target.value)}/>
						<Components.Input type="email" id={'emailId'} placeholder={'Enter email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
						<Components.Input type="password" id={'paswordId'} placeholder={'Enter password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
						<Components.Input label="Is Admin?" labelAlignment={'left'} width={'auto'} type="checkbox" value={isAdmin} onChange={handleAdminToggle} />
						<CustomButton type="submit" onClick={handleSubmit}> Add User </CustomButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddUser;
