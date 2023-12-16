import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import UserCard from '../components/UserCard';

const Home = () => {
  const user = {
    profileName: 'Bhupesh',
    profilePhoto: "/logo192.png",
  };

  return (
    <div className="bg-gray-300 h-screen">
      <div className="flex flex-column">
        <UserCard bgColor={"bg-white"} shadowColor={"shadow-grey-600"} {...user} />
        <Navbar bgColor={"bg-white"} shadowColor={"shadow-grey-600"}></Navbar>
      </div>
    </div>
  );
};

export default Home;