import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd/es';
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = async (event) => {
    console.log('lol');
    event.preventDefault();
    const userData = {
      username: username,
      password: password
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(
        apiUrl + '/api/v1/auth/login',
        userData
      );
      console.log('success', response.data.message);
      console.log('user', response.data.user);
    } catch (error) {
      console.log('failed', error);
    }
  };

  return (
    <div className="h-full w-full flex flex-row">
      <img
        src="assets/images/maxresdefault.svg"
        alt="logo"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
      />
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <div className="w-[340px] flex flex-col ">
          <Form
            className="flex flex-col  w-full mt-4"
            type="submit"
            layout="vertical"
            labelAlign="left"
            onSubmit={handleApi}
            requiredMark={false}
          >
            <h2 className="text-3xl font-bold mb-8">Sign In</h2>
            <p className="text-light-3 small-medium md:base-regular mb-2">
              To access the website , please enter your details
            </p>

            <Form.Item
              label={<strong>Username</strong>}
              name="username"
              rules={[
                { required: true, message: 'Please enter your username' }
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                placeholder="Username"
                value={username}
                size="large"
                onChange={handleUsername}
              />
            </Form.Item>

            <Form.Item
              label={<strong>Password</strong>}
              name="password"
              rules={[
                { required: true, message: 'Please enter your password' }
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                size="large"
              />
            </Form.Item>

            <Button type="primary" size="large">
              Sign In
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
