import React, { useState } from 'react';
import { Input } from 'antd';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const Navbar = ({ bgColor, shadowColor }) => {
  const [search, setSearch] = useState('');

  return (
    <div
      className={`${bgColor} p-3 w-[80%] m-3 rounded-lg shadow-lg ${shadowColor}`}
    >
      <div className="flex justify-between">
        <div className="text-2xl mx-5 font-bold font-inter">GrepIt</div>

        <div className="flex w-3/5 md:w-2/5 lg:w-1/3 relative items-center text-gray-400 focus-within:text-gray-600">
          <MagnifyingGlassIcon className="w-4 h-4 absolute z-10 ml-2 pointer-events-none" />
          <Input
            placeholder="Search..."
            value={search}
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
            }}
            className="pr-3 pl-8 bg-gray-100 border-none ring-2 placeholder-gray-500 ring-gray-200 focus:ring-gray-400 focus:ring-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
