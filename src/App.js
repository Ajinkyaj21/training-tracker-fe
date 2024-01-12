import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Trainees from './Pages/Trainees/Trainees';
import Training from './Pages/Training/Training';
import Admin from './Pages/Admin/Admin';
import Edit from './Pages/Edit/edit';
import { PageLayout } from './Layouts/PageLayout';
import { isloggedIn, isloggedInAdmin } from './utils/Utils';

function App() {
  function AdminProtected({ children }) {
    if (!isloggedInAdmin()) {
      return <Navigate to="/dashboard" replace />;
    }
    // alert('login as admin');
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
            <Route
              path="/"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route path="/trainees"
              element={
                <Protected>
                  <Trainees />
                </Protected>
              }
            />
            <Route path="/training"
              element={
                <Protected>
                  <Training />
                </Protected>
              }
            />
            <Route path="/admin"
              element={
                // <Protected>
                  <AdminProtected>
                  <Admin />
                  </AdminProtected>
                // </Protected>
              }
            />
            <Route path="/edit"
              element={
                <Protected>
                  <Edit/>
                </Protected>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
