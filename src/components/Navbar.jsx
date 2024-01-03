import React, { useState } from 'react';
import { Input } from 'antd';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import Search from 'antd/es/input/Search';

const Navbar = ({ bgColor, shadowColor }) => {
  const [search, setSearch] = useState('');

  return (
    <div
      className={`${bgColor} p-3 w-[80%] m-3 rounded-lg shadow-lg ${shadowColor}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl mx-5 font-bold font-inter">GrepIt</div>

        <div className="flex w-3/5 md:w-2/5 lg:w-1/3 relative items-center text-gray-400 focus-within:text-gray-600">


          <Search placeholder="Search..."
            value={search}
            size="large"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onPressEnter={async (e) => {
              const apiUrl = process.env.REACT_APP_API_URL;
              try {
                console.log('search:', search);
                const response = await axios.post(apiUrl + '/search', search);
              } catch (error) {
                console.log('error', error);
              }
            }} enterButton
            
            style={{ borderRadius: '20px' }}
            />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
