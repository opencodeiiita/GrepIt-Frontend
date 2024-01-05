import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { Avatar, Button, Dropdown, Flex, Typography } from 'antd';
import {
  PoweroffOutlined,
  ProfileOutlined,
  UserOutlined
} from '@ant-design/icons';

const UserCard = ({ profileName, profilePhoto, bgColor, shadowColor }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    auth.logout();
    navigate('/sign-in');
  };

  const items = [
    {
      key: 1,
      icon: <ProfileOutlined />,
      label: 'View Profile',
      onClick: navigate('/profile')
    },
    {
      key: 2,
      icon: <PoweroffOutlined />,
      label: 'Logout',
      danger: true,
      onClick: handleLogout
    }
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']} autoAdjustOverflow className='cursor-pointer'>
      {auth.isAuthenticated ? (
        <Flex className='flex flex-row items-center justify-between gap-4'>
          <Typography.Title level={4}>Bhupesh</Typography.Title>
          <Avatar icon={<UserOutlined />} shape="circle" src={profilePhoto} />
        </Flex>
      ) : (
        <Button
          shape="round"
          type="text"
          icon={<UserOutlined />}
          size="large"
          href="/sign-in"
        >
          Sign-in
        </Button>
      )}
    </Dropdown>
  );
};

export default UserCard;
