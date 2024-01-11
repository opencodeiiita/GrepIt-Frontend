import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  InputNumber,
  DatePicker,
  Button,
  Form,
  Typography,
  App,
  Card} from 'antd';
import Compact from 'antd/es/space/Compact';

const CreateRoom = () => {
  const navigate = useNavigate();
  const { notification } = App.useApp();
  const handleFormSubmit = async (values) => {
    try {
      // const apiUrl = process.env.REACT_APP_API_URL;

      notification.success({
        message: 'Quiz created',
        description: `Your room code is: \${}`,
        duration: 2,
        placement: 'bottomRight'
      });
      setTimeout(() => navigate('/quiz'), 2000);
    } catch (error) {
      notification.error({
        message: 'Error Submitting Form',
        duration: 2,
        placement: 'bottomRight'
      });
    }
  };

  return (
    <Card className='card-grad min-h-[60vh]'>
      <Typography.Title level={2} style={{color:"white"}}>Create Room</Typography.Title>
      <Form
        onFinish={handleFormSubmit}
        className="flex flex-col"
        layout="vertical"
        size="large"
      >
        <Form.Item
          label="Room No"
          name="roomNo"
          rules={[{ required: true, message: 'Please enter Room No' }]}
          className='relative top-4'
          labelCol={{style : { width:"20%",}}}
        >
        <Input placeholder="Enter Room No" className='mt-[-10px] bg-white/20 focus:bg-white/50 border-none'/>
        </Form.Item>

        <Compact className='w-full mt-4 relative bottom-4 gap-1'>
          <Form.Item label="Schedule Quiz" name="schedule" className='w-[40%]'>
            <DatePicker showTime format="d-MMMM, h:00-A" className='w-full mt-[-10px] bg-white/20 focus:bg-white/50 border-none'/>
          </Form.Item>

          <Form.Item
            label="No of questions"
            name="numOfQuestions"
            rules={[
              {
                required: true,
                message: 'Required'
              }
            ]}
            className='w-[20%] '
          >
          <InputNumber className='mt-[-10px] w-full text-center bg-white/20 focus:bg-white/50 border-none ' placeholder='no. of que'/>
          </Form.Item>
        </Compact>

        <Button type="default" size="large" htmlType="submit" className='mb-4 bg-[#42c072] '>
          Start Quiz
        </Button>
        <Button htmlType="submit" type="default" className=' bg-[#42c072] '>
          Schedule Later
        </Button>
      </Form>
    </Card>
  );
};

export default CreateRoom;
