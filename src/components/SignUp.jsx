import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input } from 'antd/es';
import FormItem from 'antd/es/form/FormItem';
import { ReactComponent as LogoImg } from '../assets/images/logo.svg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = async (event) => {
    event.preventDefault();
    const userData = {
      username: name,
      email: email,
      password: password
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(
        apiUrl + '/api/v1/auth/register',
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
        <div className='h-full w-1/2 flex justify-center items-center relative top-[7vh]'>
        <img
          src="https://api2.illuminz.com/uploads/mvp_5ab5e2aa7d.png"
          alt="logo"
          className="hidden xl:block object-cover bg-no-repeat h-full w-[110%]"
        />
      </div>
      <section className="flex flex-1 justify-center items-center flex-col py-10 h-[100vh]">
        <div className="sm:w-420 flex-center flex-col w-[65%] card-grad py-2 px-4">
          <Form
            className="flex flex-col  w-full mt-4"
            type="submit"
            layout="vertical"
            labelAlign="left"
            onSubmit={handleApi}
            requiredMark={false}
          >
            <LogoImg height={'84px'} width={'84px'} />
            <h2 className="text-3xl font-bold text-white">New Here ?</h2>
            <p className="text-light-3 md:base-regular mb-2 text-white">
              create a new account, enter details here...
            </p>
            <FormItem
              label={<strong className='text-lg font-semibold text-gray-400'>Name</strong>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className='mb-1'
            >
              <Input
                id="name"
                type="name"
                placeholder="Name"
                value={name}
                onChange={handleName}
                size="large"
                className='mt-[-2px]  bg-white/10 focus:bg-white/50 border-none'
              />
            </FormItem>

            <FormItem
              label={<strong className='text-lg font-semibold text-gray-400'>Email</strong>}
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className='mb-1'
            >
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                size="large"
                className='mt-[-2px]  bg-white/10 focus:bg-white/50 border-none'
              />
            </FormItem>

            <FormItem
              label={<strong className='text-lg font-semibold  text-gray-400'>Password</strong>}
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className='mb-1'
            >
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                size="large"
                className='mt-[-2px]  bg-white/10 focus:bg-white/50 border-none'
              />
            </FormItem>
            <FormItem
              label={<strong className='text-lg font-semibold  text-gray-400'>Confirm Password</strong>}
              name="confirmPassword"
              rules={[{ required: true, message: 'Please enter your password' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className='mb-6'
            >
              <Input
                id="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                size="large"
                className='mt-[-2px]  bg-white/10 focus:bg-white/50 border-none'
              />
            </FormItem>
            <button className='bg-[#42c072] mb-4 border-none hover:text-green-950 py-2 rounded-md'>
              Sign In
            </button>
            <p className='text-center mb-2 text-md text-white'>Already have an account, Checkout at <a href="/sign-in" className='text-blue-600'>Sign-in</a></p>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
