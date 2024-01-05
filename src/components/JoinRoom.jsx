import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { App, Button, Card, Form, Input, Typography } from 'antd';

const JoinRoom = () => {
  const navigate = useNavigate();
  const { notification } = App.useApp();
  const handleFormSubmit = async (values) => {
    try {
      // const apiUrl = process.env.REACT_APP_API_URL;

      notification.success({
        message: 'Navigating to Quiz',
        description: ``,
        duration: 2,
        placement: 'bottomRight'
      });
      setTimeout(() => navigate('/quiz'), 1000);
    } catch (error) {
      notification.error({
        message: 'Error Joining Room',
        duration: 2,
        placement: 'bottomRight'
      });
    }
  };

  return (
    <Card>
      <Typography.Title level={2}>Join Room</Typography.Title>
      <Form
        onFinish={handleFormSubmit}
        className="flex flex-col"
        layout="vertical"
        size="large"
      >
        <Form.Item
          label="Room Code"
          name="roomCode"
          rules={[
            { required: true, message: 'Please enter Room code to join' }
          ]}
        >
          <Input placeholder="Enter Room Code" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Join Room
        </Button>
      </Form>
    </Card>
  );
};

export default JoinRoom;
