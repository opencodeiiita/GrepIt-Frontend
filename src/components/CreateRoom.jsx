import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, DatePicker, Button, Form, notification } from 'antd';
import { Textarea } from '@material-tailwind/react';

const CreateRoom = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (values) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      console.log('Scheduling success. Show side pop-up.');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="mx-8 max-w-md bg-white p-8 rounded-md shadow-md mb-8 lg:mx-auto">
      <h2 className="text-2xl font-semibold mb-5">Create Room</h2>
      <Form
        onFinish={handleFormSubmit}
        className="flex flex-col w-full mt-4"
        layout="vertical"
      >
        <Form.Item
          label="Room No"
          name="roomNo"
          rules={[{ required: true, message: 'Please enter Room No' }]}
        >
          <Input
            placeholder="Enter Room No"
            className="mt-1 p-2 bg-white rounded-md text-[16px] w-full"
          />
        </Form.Item>

        <Form.Item
          label="Schedule Quiz"
          name="schedule"
          rules={[{ required: true, message: 'Please select a schedule' }]}
        >
          <DatePicker
            showTime
            className="mt-1 bg-white rounded-md text-[16px] w-full"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="No of questions"
          name="numOfQuestions"
          rules={[{ required: true, message: 'Please enter the number of questions' }]}
        >
          <Input
            type="number"
            className="mt-1 p-2 bg-white text-[16px] rounded-md w-full"
          />
        </Form.Item>

        <Button
          onClick={() => navigate('../quiz')}
          type="primary"
          className="w-full h-fit text-[16px] mb-5 px-4 py-2 rounded-md"
        >
          Start Quiz
        </Button>

        <Button
          htmlType="submit"
          type="default"
          className="w-full h-fit text-[16px] px-4 py-2 border-black rounded-md"
        >
          Schedule Later
        </Button>
      </Form>

      {showSuccess && (
        <div className="bg-green-500 text-white py-2 px-4 rounded-md fixed bottom-8 right-8">
          Success! Link generated.
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
