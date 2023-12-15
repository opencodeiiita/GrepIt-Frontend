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
      <div
        className={`object-cover relative flex items-center cursor-pointer p-4 rounded transition-all duration-300 ${
          isDropdownOpen ? 'shadow-md' : ''
        }`}
        onClick={toggleDropdown}
      >
        <img src={profilePhoto} alt={profileName} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-bold hidden md:inline">{profileName}</span>

        {isDropdownOpen && (
          <div className="absolute top-12 left-0 bg-white border rounded mt-2 shadow-md z-10">
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={handleViewProfile}>
              View Profile
            </button>
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;