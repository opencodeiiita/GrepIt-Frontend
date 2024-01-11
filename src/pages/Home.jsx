import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';
import { Col, Layout, Row } from 'antd';
import NavBar from '../components/NavBar.jsx';
import * as THREE from "three";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(1);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xc1ff,
          backgroundColor: 0x0,
          points: 20.00,
          maxDistance: 22.00
        })
      );
    }
  }, [vantaEffect]);
  return (

    <Layout className="h-screen main-grad">
      <Layout.Header className="w-full h-[10%] p-2 pr-6 rounded-md flex flex-row items-center justify-between">
        <NavBar className="w-full"/>
      </Layout.Header>
      <Layout.Content className="h-[90%] mt-12">
        <Row justify={'space-around'} className="p-16 gap-24">
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