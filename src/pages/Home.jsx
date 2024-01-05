import React from 'react';
// import Navbar from '../components/Navbar';
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';
import { Col, Layout, Row } from 'antd';
import NavBar from '../components/NavBar.jsx';

const Home = () => {
  // const user = {
  //   profileName: 'Bhupesh',
  //   profilePhoto: '/logo192.png'
  // };

  return (
    <Layout className="h-screen">
      <Layout.Header className="w-full p-2 pr-6 rounded-md flex flex-row items-center justify-between ">
        <NavBar />
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
