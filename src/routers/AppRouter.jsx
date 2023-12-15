// src/routers/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All pages are just for demonstration purposes, pages must be heavily edited in order to make it work
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import CreateRoom from '../pages/CreateRoom';
import SignUp from '../components/SignUp';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/sign-up" exact element={<SignUp/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/createRoom" element={<CreateRoom/>} />
        <Route path="/home" exact element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
