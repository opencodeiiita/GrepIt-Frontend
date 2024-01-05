import React from 'react';
// import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';
import { Col, Image, Layout, Row, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { ReactComponent as LogoImg } from '../assets/images/logo.svg';

const Home = () => {
  // const user = {
  //   profileName: 'Bhupesh',
  //   profilePhoto: '/logo192.png'
  // };
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
    <Layout className="h-screen">
      <Layout.Header className="w-full p-2 pr-6 rounded-md flex flex-row items-center justify-between ">
        <span className='flex flex-row items-center justify-between'>
          <LogoImg height={"72px"} width={"72px"}/>
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
      </Layout.Header>
      <Layout.Content>
        <Row justify={'space-around'} className="p-16 gap-64">
          <Col flex={2}>
            <CreateRoom />
          </Col>
          <Col flex={2}>
            <JoinRoom />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Home;
