import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';

const Home = () => {
  const user = {
    profileName: 'Bhupesh',
    profilePhoto: '/logo192.png'
  };

  return (
    <div className="bg-gray-300 h-screen">
      <div className="flex flex-column">
        <UserCard
          bgColor={'bg-white'}
          shadowColor={'shadow-grey-600'}
          {...user}
        />
        <Navbar bgColor={'bg-white'} shadowColor={'shadow-grey-600'}></Navbar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div style={{ padding: '30px' }} className="col-span-1 md:col-span-1">
          <CreateRoom />
        </div>

        <div style={{ padding: '30px' }} className="col-span-1 md:col-span-1">
          <JoinRoom />
        </div>
      </div>
    </div>
  );
};

export default Home;
