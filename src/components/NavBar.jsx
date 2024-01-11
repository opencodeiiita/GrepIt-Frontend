import React from 'react';
import { ReactComponent as LogoImg } from '../assets/images/logo.svg';
import Search from 'antd/es/input/Search';
import axios from 'axios';
import { SearchOutlined } from '@ant-design/icons';
import UserCard from './UserCard.jsx';

const NavBar = () => {

  const searchUser = async (e) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.get(
        `${apiUrl}/api/v2/search?search=${encodeURIComponent(e.target.value)}`
      );
      console.log(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (

    <div className='flex w-full justify-between items-center'>
      <span className="flex flex-row items-center justify-between">
        <LogoImg height={'72px'} width={'72px'} />
        <h1 className='text-white text-2xl font-semibold'>GrepIt</h1>
      </span>
      <div className='flex w-[40%] items-center justify-end gap-4'>
        <Search
          className="flex lg:w-3/4 md:w-3/5 w-2/5 relative bg-slate-200 rounded-md"
          placeholder="Search..."
          size="large"
          onPressEnter={searchUser}
          prefix={<SearchOutlined />}
        />
        <UserCard />
      </div>
    </div>
  );
};

export default NavBar;
