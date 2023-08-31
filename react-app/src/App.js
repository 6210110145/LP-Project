import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import { ToastContainer } from 'react-toastify';
import UserSignUP from './pages/UserSignUp';
import UserLogIn from './pages/UserLogIn';
import UserPayment from './pages/UserPayment'
import UserPage from './pages/UserPage'
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer autoClose={3000} position={"top-center"} hideProgressBar={true}/>
        <Routes>
          <Route>
            <Route path='/' exact element={<UserLogIn />} />
            <Route path='/signup' element={<UserSignUP />} />
            <Route path='/home' element={<Home />} />
            <Route path='/pay' element={<UserPayment />} />
            <Route path='/user' element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
