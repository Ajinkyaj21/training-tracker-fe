import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../Assets/Logo.jpg';
import { login } from '../../Services/Api';
import { LOCALSTORAGE_ITEMS } from '../../utils/Constants';
import styles from "./Login.module.css";
// import Input from '../../Components/Input.js'

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			const response = await login(email, password);
			const token = response.result.token;
			// Cookies.set("token", token);
			localStorage.setItem("token", token);
			//for admin validation
			const isAdmin = response.result.is_admin;
			localStorage.setItem("adminToken", isAdmin);
			if (isAdmin) {
				navigate("/admin");
			} else {
				navigate('/');
			}
		} catch (error) {
			console.error("Error: ", error);
		}
	};

	useEffect(() => {
		const checkLoggedIn = () => {
			const token = localStorage.getItem(LOCALSTORAGE_ITEMS.TOKEN);
			const isAdmin = localStorage.getItem(LOCALSTORAGE_ITEMS.IS_ADMIN);
			if (token) {
				if (isAdmin) {
					navigate("/admin");
				} else {
					navigate('/');
				}
			}
		};
		checkLoggedIn();
	}, []);

	// Review: this is not mobile-responsive, side logo img could be hidden in mobile view
	// Review: use bootstrap only if required
	return (
		<div className={`container-fluid w-full h-full  ${styles.rootContainer}`}>
			<div className='row'>
				{/* Review: change the classname to something meaningful like imgContainer */}
				<div className={`col-7 ${styles.l}`}>
					<img src={Logo} className={styles.logoImg} alt="logo"/>
				</div>
				<div className={` col-5  ${styles.r}`}>
					<div className={styles.formContainer}>
						<div className={`mt-1  ${styles.heading}`}>Login</div>
						<form onSubmit={handleSubmit} className={styles.formSection}>
							<div className="form-group col-12 mb-3 d-flex flex-column">
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
									style={{boxShadow: 'none', padding: "0.5rem 1rem"}} onChange={(e) => setEmail(e.target.value)}></input>
								{/* <Input className={Styles.pss} placeholder="Username or e-mail"
								style={{boxShadow:'none', padding: "0.5rem 1rem"}}/> */}
							</div>
							<div className="form-group">
								{/* Review: create common input box component and avoid inline-styling */}
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
									style={{boxShadow: 'none', padding: "0.5rem 1rem"}} onChange={(e) => setPassword(e.target.value)}/>
							</div>
							<br />
							{/* Review: use button component here */}
							{/* Review: always have meaningful css classname like submitBtn */}
							<button type="submit" className= {`btn btn-primary col-12 ${styles.btn1}`}>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}