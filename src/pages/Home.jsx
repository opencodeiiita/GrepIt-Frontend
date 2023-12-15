import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';

const Home = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar></Navbar>
      <SignUp/>
    </div>
  );
};

export default Home;
