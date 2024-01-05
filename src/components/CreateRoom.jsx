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
  Divider,
  Card
} from 'antd';
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
    <Card>
      <Typography.Title level={2}>Create Room</Typography.Title>
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
        >
          <Input placeholder="Enter Room No" />
        </Form.Item>

        <Compact>
          <Form.Item label="Schedule Quiz" name="schedule">
            <DatePicker showTime format="d-MMM h a" />
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
          >
            <InputNumber />
          </Form.Item>
        </Compact>

        <Button type="primary" size="large" htmlType="submit">
          Start Quiz
        </Button>
        <Divider />
        <Button htmlType="submit" type="default">
          Schedule Later
        </Button>
      </Form>
    </Card>
  );
};

export default CreateRoom;
