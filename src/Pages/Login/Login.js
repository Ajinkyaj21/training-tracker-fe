import React, { useEffect, useState} from 'react';
import Styles from "./Login.module.css";
import Logo from '../../Assets/Logo.jpg';
import { useNavigate } from "react-router-dom";
import { login } from '../../Services/Api';
// import Input from '../../Components/Input.js'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.info('res is ', response);
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
      console.error("Error posting data:", error);
    }
  };
  // useEffect(() => {
  //   const checkAdmin = () => {
  //   const isAdmin = localStorage.getItem('is_admin');
  //   // if (isAdmin) {
  //   //   navigate("/admin");
  //   // }
  //   };
  //   checkAdmin();
  // }, []);

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem('token');
      const isAdmin = localStorage.getItem('adminToken');
      if (token && isAdmin) {
           navigate("/admin");
        // navigate("/trainees");
      } else {
        // send to dashboard
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <div className={`container-fluid w-full h-full  ${Styles.con}`}>
    <div className='row '>
      <div className={` col-7 ${Styles.l}`}>
        <img src={Logo} className={Styles.logoImg} alt="logo"/>
      </div>
      <div className={` col-5  ${Styles.r}`}>
       <div className={Styles.formContainer}>
        <div className={`mt-1  ${Styles.heading} `}>
          Login
        </div>

        <form onSubmit={handleSubmit} className={Styles.formSection}>
          <div className="form-group col-12  mb-3 d-flex flex-column">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
           style={{boxShadow: 'none', padding: "0.5rem 1rem"}} onChange={(e) => setEmail(e.target.value)}></input>
              {/* <Input className={Styles.pss} placeholder="Username or e-mail"
               style={{boxShadow:'none', padding: "0.5rem 1rem"}}/> */}
          </div>
          <div className="form-group ">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
           style={{boxShadow: 'none', padding: "0.5rem 1rem"}} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <br />
          <button type="submit" className= {`btn btn-primary col-12 ${Styles.btn1}`}>Submit</button>
        </form>
      </div>
      </div>
    </div>
  </div>
  );
}
