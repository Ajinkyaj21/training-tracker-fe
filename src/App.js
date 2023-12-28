import React, { useState } from 'react';
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Admin from './Pages/Admin/Admin';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Edit from './Pages/Edit/edit';
import Login from './Pages/Login/Login';
import Trainees from './Pages/Trainees/Trainees';
import Training from './Pages/Training/Training';

const App = () => {

  useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function Protected({ children }) {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <>
    <Sidebar>
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn = {setIsLoggedIn}/>} />
        <Route path="/" element={
          <Protected>
            <Dashboard />
          </Protected>
        }
        />
        <Route path="/trainees" element={
          <Protected>
            <Trainees />
          </Protected>
        }
        />
        <Route path="/training" element={
          <Protected>
            <Training />
          </Protected>
        }
        />
        <Route path="/admin" element={
          <Protected>
            <Admin />
          </Protected>
        }
        />
        <Route path="/edit" element={
          <Protected>
            <Edit />
          </Protected>
        }
        />

    </Routes>
    </Sidebar>
    </>
  );
};

export default App;
