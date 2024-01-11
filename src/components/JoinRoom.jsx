import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { App, Button, Card, Form, Input, Typography, Image} from 'antd';

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
    <Card className='card-grad w-full min-h-[60vh]'>
      <Image 
        width={200}
        height={160}
        preview={false}
        src='https://img.graphicsurf.com/2020/10/business-people-meeting-vector-flat-design1.jpg'
        className='mx-auto w-full'
        />
      <Typography.Title level={2} style={{color:"white"}} className='mt-4 text-white'>Join Room</Typography.Title>
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
          className='mt-[-10px]'
        >
          <Input placeholder="Enter Room Code" className='mt-[-20px] bg-white/20 focus:bg-white/50 border-none'/>
        </Form.Item>
        <Button type="default" htmlType="submit" className='bg-[#42c072]  mt-2'>
          Join Room
        </Button>
      </Form>
    </Card>
  );
};

export default JoinRoom;
