import React from 'react';
import { ReactComponent as LogoImg } from '../assets/images/logo.svg';
import { Typography } from 'antd';
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
    <>
      <span className="flex flex-row items-center justify-between">
        <LogoImg height={'72px'} width={'72px'} />
        <Typography.Title level={3} className="font-inter">
          GrepIt
        </Typography.Title>
      </span>
      <Search
        className="flex lg:w-1/3 md:w-2/5 w-3/5 relative"
        placeholder="Search..."
        size="large"
        onPressEnter={searchUser}
        enterButton
        prefix={<SearchOutlined />}
      />
      <UserCard />
    </>
  );
};

export default NavBar;
