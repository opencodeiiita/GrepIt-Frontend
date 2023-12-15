import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ profileName, profilePhoto }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewProfile = () => {
    navigate('/profile');
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="relative flex items-center cursor-pointer p-4 rounded" onClick={toggleDropdown}>
        <img src={profilePhoto} alt={profileName} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-bold hidden md:inline">{profileName}</span>

        {isDropdownOpen && (
          <div className="absolute top-10 left-0 bg-white border rounded mt-5 shadow z-10">
            <button className="block px-4 py-2 w-full text-left" onClick={handleViewProfile}>
              View Profile
            </button>
            <button className="block px-4 py-2 w-full text-left" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;