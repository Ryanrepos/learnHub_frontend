import { Table, Button, Space, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const HeaderActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export default function AdminUsers() {
    const columns = [
        {
            title: 'User',
            key: 'user',
            render: (_: any, record: any) => (
                <Space>
                    <Avatar src={record.avatar} />
                    <span>{record.name}</span>
                </Space>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Joined Date',
            dataIndex: 'joined',
            key: 'joined',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />} />
                    <Button icon={<DeleteOutlined />} danger />
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Student',
            joined: '2023-10-01',
            avatar: 'https://i.pravatar.cc/150?u=john',
        },
        {
            key: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'Admin',
            joined: '2023-09-15',
            avatar: 'https://i.pravatar.cc/150?u=jane',
        },
    ];

    return (
        <div>
            <HeaderActions>
                <h2>User Management</h2>
                <Button type="primary" icon={<UserAddOutlined />} size="large">
                    Add New User
                </Button>
            </HeaderActions>
            
            <Table columns={columns} dataSource={data} />
        </div>
    );
}
