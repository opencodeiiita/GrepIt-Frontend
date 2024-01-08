import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';
import { Col, Layout, Row } from 'antd';
import NavBar from '../components/NavBar.jsx';
import * as THREE from "three";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xc1ff,
          color: 0x1a99ff,
          backgroundColor: 0x0,
          points: 20.00,
          maxDistance: 22.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (

    <Layout ref={vantaRef} className="h-screen">
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