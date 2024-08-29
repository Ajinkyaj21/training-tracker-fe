import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../Assets/fmlogos.jpeg';
import { Components } from '../../Components';
import { login } from '../../Services/Api';
import { LOCALSTORAGE_ITEMS } from '../../utils/Constants';
import styles from "./Login.module.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			const response = await login(email, password);
			const token = response.result.token;
			// const tokens = response.result.tokens;
			// Cookies.set("token", token);
			localStorage.setItem("token", token);
			//for admin validation
			const isAdmin = response.result.is_admin;
			localStorage.setItem("adminToken", isAdmin);
			localStorage.setItem("username", email);
			navigate("/learningSpace");
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

	return (
	// <div className={`container-fluid w-full h-full  ${styles.rootContainer}`}>
	// 	<div className='row'>
	// 		<div className={`col-7 ${styles.l}`}>
	// 			<img src={Logo} className={styles.logoImg} alt="logo"/>
	// 		</div>
	// 		<div className={` col-5  ${styles.r}`}>
	// 			<div className={styles.formContainer}>
	// 				<div className={`mt-1  ${styles.heading}`}>Login</div>
	// 				<form onSubmit={handleSubmit} className={styles.formSection}>
	// 					<div className="form-group col-12 mb-3 d-flex flex-column">
	// 						<input type="email" className="form-control" id="exampleInputEmail1"
	// aria-describedby="emailHelp" placeholder="Enter email"
	// eslint-disable-next-line @stylistic/js/max-len
	// 							style={{boxShadow: 'none', padding: "0.5rem 1rem"}} onChange={(e) => setEmail(e.target.value)}></input>

	// 					</div>
	// 					<div className="form-group">
	// eslint-disable-next-line @stylistic/js/max-len
	// 						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
	// eslint-disable-next-line @stylistic/js/max-len
	// 							style={{boxShadow: 'none', padding: "0.5rem 1rem"}} onChange={(e) => setPassword(e.target.value)}/>
	// 					</div>
	// 					<br />
	// 					<Components.CustomButton width='100%'>Submit</Components.CustomButton>
	// 				</form>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>
		<div className={styles.mainContainer}>
			<div className={styles.leftContainer}>
				<div className={styles.logo}>
					<img src={Logo} className={styles.logoImg} alt="logo"/>
					<h1 style={{color: "white", marginTop: "2rem", fontWeight: "semibold"}}>FlairMinds Software</h1>
				</div>
			</div>
			<div className={styles.rightContainer}>
				<div className={styles.rightContaint}>
					<div className={styles.welcomeContaint}>
						<h2 className={styles.login}>Login</h2>
					</div>
					<div >
						<form className={styles.formContaint}onSubmit={handleSubmit}>
							<div className={styles.email}>
								<Components.Input type="email" id={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter Email'}/>
							</div>
							<div className={styles.password}>
								<Components.Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Enter Password'}/>
							</div>
							{/* <Components.CustomButton width='100%'>Submit</Components.CustomButton> */}
							<button className={styles.submitBtn}> Submit </button>
						</form>

					</div>
				</div>
			</div>
		</div>
	);
}