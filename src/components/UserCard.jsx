import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { Avatar, Button, Card, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserCard = ({ profileName, profilePhoto, bgColor, shadowColor }) => {
  const auth = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    auth.isAuthenticated && setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewProfile = () => {
    navigate('/profile');
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    auth.logout();
    setIsDropdownOpen(false);
    navigate('/sign-in');
  };

  return (
    <div
      className={`${bgColor} p-3 m-3 w-[20%] rounded-lg shadow-lg ${shadowColor}`}
    >
      <div
        className={`object-cover relative flex items-center rounded transition-all duration-300 ${
          isDropdownOpen ? 'shadow-2xl' : '' // Adjust the shadow here
        }`}
        onClick={toggleDropdown}
      >
        {auth.isAuthenticated ? (
          <>
            <Avatar src={profilePhoto} icon={<UserOutlined/>} draggable />
            <Typography.Text className="md:ml-4 font-bold hidden md:inline cursor-default" >{profileName}</Typography.Text>
          </>
        ) : (
          <Button type="text" shape="round" icon={<UserOutlined />} href='/sign-in' size='large'>
            Sign-in
          </Button>
        )}

        {isDropdownOpen && (
          <div className="absolute top-12 left-0 bg-white border rounded mt-2 shadow-5xl z-10">
            <button
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              onClick={handleViewProfile}
            >
              View Profile
            </button>
            <button
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
