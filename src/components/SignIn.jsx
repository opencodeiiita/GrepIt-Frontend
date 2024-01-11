import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input } from 'antd/es';
import { ReactComponent as LogoImg } from '../assets/images/logo.svg';

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
      <div className='h-full w-1/2 flex justify-center items-center relative top-[20vh]'>
        <img
          src="https://cdn.unicloud9.com/assets/v1/desktop/images/reset-password.0ab0c582e295.png"
          alt="logo"
          className="hidden xl:block object-cover bg-no-repeat h-1/2 w-[70%]"
        />
      </div>
      <section className="flex flex-1 justify-center items-center flex-col py-10 w-1/2 h-[100vh]" >
        <div className="w-[65%] flex flex-col px-4 py-2 card-grad">
          <Form
            className="flex flex-col w-full mt-4"
            type="submit"
            layout="vertical"
            labelAlign="left"
            onSubmit={handleApi}
            requiredMark={false}
          >
            <LogoImg height={'84px'} width={'84px'} />
            <h2 className="text-3xl  font-bold text-white">Let's Get Started</h2>
            <p className="text-light-3 md:base-regular mb-4 text-white">
              Welcome, Kindly enter your details.
            </p>

            <Form.Item
              label={<strong className='text-lg font-semibold text-gray-400'>Username</strong>}
              name="username"
              rules={[
                { required: true, message: 'Please enter your username' }
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className='mb-2'
            >
              <Input
                placeholder="Username"
                value={username}
                size="large"
                onChange={handleUsername}
                className='mb-[-2px] bg-white/10 focus:bg-white/50 border-none'
              />
            </Form.Item>

            <Form.Item
              label={<strong className='text-lg font-semibold text-gray-400'>Password</strong>}
              name="password"
              rules={[
                { required: true, message: 'Please enter your password' }
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className='mb-8'
            >
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                size="large"
                className='mb-[-2px] bg-white/10 focus:bg-white/50 border-none'
              />
            </Form.Item>

            <button className='bg-[#42c072] mb-4 border-none hover:text-green-950 py-2 rounded-md'>
              Sign In
            </button>

            <p className='text-center mb-2 text-md text-white'>Don't have an account <a href="/sign-up" className='text-blue-600'>Sign-up</a> here</p>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
