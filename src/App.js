import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AddUser from '../src/Layouts/AddUser/AddUser';
import './App.css';
import AllocateTraining from './Layouts/AllocateTraining/AllocateTraining';
import { PageLayout } from './Layouts/PageLayout';
import Admin from './Pages/Admin/Admin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Edit from './Pages/Edit/edit';
import Login from './Pages/Login/Login';
import Trainees from './Pages/Trainees/Trainees';
import Training from './Pages/Training/Training';
import { isloggedIn, isloggedInAdmin } from './utils/Utils';

function App() {
	function AdminProtected({ children }) {
		if (!isloggedInAdmin()) {
			alert("Sorry you can not access this page, Your not admin");
			return <Navigate to="/" replace />;
		}
		return children;
	}

	function Protected({ children }) {
		if (!isloggedIn()) {
			return <Navigate to="/login" replace />;
		}
		return children;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login/>}/>
					<Route path="/" element={<PageLayout/>}>
						<Route path="/" element={<Protected><Dashboard/></Protected>} />
						<Route path="/trainees" element={<Protected><Trainees/></Protected>} />
						<Route path="/training" element={<Protected><Training/></Protected>}/>
						<Route path="/admin" element={<AdminProtected><Admin/></AdminProtected>}/>
						<Route path="/edit" element={<Protected><Edit/></Protected>}/>
						<Route path="/allocateTraining" element={<AllocateTraining/>}/>
						<Route path="/addUser" element={<AddUser/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
