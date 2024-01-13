
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../Services/Api';
import CustomButton from "../Button/CustomButton";
import { Input } from '../Input/Input';
// import stylesAU from './AddUser.module.css';

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
			console.info('Response Data:', response.data);
			navigate('/');
		} catch (error) {
			console.error('Error posting data:', error);
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='d-flex col  justify-content-center m-5'>
					<form className='' onSubmit={handleSubmit}>
						<div className='m-3'>
							<Input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
						</div>
						<div className='m-3 '>
							<Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						</div>
						<div className='m-3'>
							<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<div className='m-3'>
							<Input label="Is Admin:" type="checkbox" value={isAdmin} onChange={handleAdminToggle} className='m-2'/>
						</div>
						<CustomButton type="submit" className='m-2' > Add User </CustomButton>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
