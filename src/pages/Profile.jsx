import React, { useState } from 'react';
import { Layout, Card, Avatar, Form, Input, Button, Upload, message, List } from 'antd';
import { EditOutlined, SettingOutlined, EllipsisOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import NavBar from '../components/NavBar';

const { Header, Content } = Layout;

const Profile = () => {
    const [username, setUsername] = useState('Mark Jones');
    const [email, setEmail] = useState('mxkxshxl@gmail.com');
    const [profileImgUrl, setProfileImgUrl] = useState('https://api.dicebear.com/7.x/miniavs/svg?seed=3');
    const [editMode, setEditMode] = useState(false);
    const [form] = Form.useForm();

    const handleEdit = () => {
        setEditMode(true);
        form.setFieldsValue({
            username: username,
            email: email,
        });
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        form.resetFields();
    };

    const handleSave = async (values) => {
        try {
            const updatedProfileImgUrl = "https://api.dicebear.com/7.x/miniavs/svg?seed=3";

            setUsername(values.username)
            setEmail(values.email)
            setProfileImgUrl(updatedProfileImgUrl);

            message.success('Profile updated successfully');
            setEditMode(false);
        } catch (error) {
            console.error('Error updating profile:', error);
            message.error('Failed to update profile');
        }
    };

    const beforeUpload = (file) => {
        return true;
    };

    const pendingRoomsData = [
        { roomID: '12345', roomName: 'Room 1' },
        { roomID: '67890', roomName: 'Room 2' },
    ];

    return (
        <Layout className="h-screen">
            <Header className="w-full p-2 pr-6 rounded-md flex flex-row items-center justify-between">
                <NavBar />
            </Header>
            <Content className="flex items-start justify-center">
                <Card
                    title="Pending Rooms"
                    style={{
                        width:'50%',
                        minWidth: '350px',
                        height:'fit-content',
                        marginBottom: 16,
              
                        
                    }}
                
                >
                    <List
                        dataSource={pendingRoomsData}
                        renderItem={(item) => (
                            <Card
                                key={item.roomID}
                                style={{ marginBottom: 16 }}
                                actions={[
                                    <Button type="primary" icon={<ArrowRightOutlined />} key="join">
                                        Join
                                    </Button>,
                                ]}
                            >
                                <Meta
                                    title={`Room ID: ${item.roomID}`}
                                    description={`Room Name: ${item.roomName}`}
                                />
                            </Card>
                        )}
                    />
                </Card>
                
               
                <Card
                    style={{
                        width:'50%',
                        minWidth: '350px',
                        height:'fit-content',
                        marginBottom: 16,
                    
                    }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" onClick={handleEdit} />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    {editMode ? (
                        <Form form={form} onFinish={handleSave} initialValues={{}}>
                            <Form.Item name="username">
                                <Input placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="email">
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item name="profilePhoto">
                                <Upload beforeUpload={beforeUpload} showUploadList={false}>
                                    <Button icon={<EditOutlined />}>Change Profile Photo</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Save
                                </Button>
                                <Button type="default" onClick={handleCancelEdit} style={{ marginLeft: 8 }}>
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Form>
                    ) : (
                        <Meta
                            avatar={<Avatar size={48} src={profileImgUrl} />}
                            title={username}
                            description={email}
                        />
                    )}
                </Card>
            </Content>
        </Layout>
    );
};

export default Profile;

