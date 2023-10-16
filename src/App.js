import React, { useState } from 'react';
import { useNavigate ,Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Navbar from './Components/Navbar/Navbar';
import PageLayout from './PageLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import Trainees from './Components/Trainees/Trainees';
import Admin from './Components/Admin/Admin';

const App = () => {

  useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const handleLogin = () => {
    setIsLoggedIn(true);

  };

  function Protected({ children }) {
    if (!isLoggedIn) { 
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path='/' element={<PageLayout/>}>
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
      <Route path="/admin" element={
        <Protected>
           <Admin />
        </Protected>
      }
      />
      </Route>


      {/* <Route path='/' element={<Sidebar/>}>
        <Route path='/' element={
          <Protected>
          <Sidebar />
       </Protected>
        }
        
        />
      </Route> */}

    </Routes>
    </>
  );
};

export default App;
