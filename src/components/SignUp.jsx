import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd/es';
import FormItem from 'antd/es/form/FormItem';
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
      <img
        src="assets/images/maxresdefault.svg"
        alt="logo"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
      />
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <div className="sm:w-420 flex-center flex-col ">
          <Form
            className="flex flex-col  w-full mt-4"
            type="submit"
            layout="vertical"
            labelAlign="left"
            onSubmit={handleApi}
            requiredMark={false}
          >
            <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
            <p className="text-light-3 small-medium md:base-regular mb-2">
              To create new account , please enter new details
            </p>
            <FormItem
              label={<strong>Name</strong>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                id="name"
                type="name"
                placeholder="Name"
                value={name}
                onChange={handleName}
                size="large"
              />
            </FormItem>

            <FormItem
              label={<strong>Email</strong>}
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                size="large"
              />
            </FormItem>

            <FormItem
              label={<strong>Password</strong>}
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
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
            </FormItem>
            <FormItem
              label={<strong>Confirm Password</strong>}
              name="confirmPassword"
              rules={[{ required: true, message: 'Please enter your password' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                id="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                size="large"
              />
            </FormItem>
            <Button
              size="large"
              type="primary"
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
