import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';

const Home = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar bgColor={"bg-white"} shadowColor={"shadow-grey-600"}></Navbar>
    </div>
  );
};

export default Home;
