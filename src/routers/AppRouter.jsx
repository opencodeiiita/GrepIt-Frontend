// src/routers/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All pages are just for demonstration purposes, pages must be heavily edited in order to make it work
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Profile from '../pages/Profile';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/profile" exact element={<Profile/>} />
        <Route path="/sign-up" exact element={<SignUp/>} />
        <Route path="/sign-in" exact element={<SignIn/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
