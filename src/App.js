import React, { useState } from 'react';
import { useNavigate ,Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Navbar from './Components/Navbar/Navbar';
import PageLayout from './PageLayout';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Trainees from './Pages/Trainees/Trainees';
import Admin from './Pages/Admin/Admin';
import Training from './Pages/Training/Training';
import Edit from './Pages/Edit/edit';

const App = () => {

  useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function Protected({ children }) {
    // setIsLoggedIn(checkIsLoggedIn(check token))
    if (!isLoggedIn) { 
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn = {setIsLoggedIn}/>} />
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
            <Edit  />
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
