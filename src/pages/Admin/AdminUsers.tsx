import { Table, Button, Space, Avatar, Tag } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useGetUsersByAdmin } from '@/composables/useUsers.ts';

const HeaderActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export default function AdminUsers() {
    const { data: usersData, isLoading } = useGetUsersByAdmin();
    const users = usersData?.data?.items || [];

    const columns = [
        {
            title: 'User',
            key: 'user',
            render: (_: any, record: any) => (
                <Space>
                    <Avatar src={record.avatar_url || `https://i.pravatar.cc/150?u=${record.id}`} />
                    <span>{record.firstName} {record.lastName}</span>
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
            render: (role: string) => (
                <Tag color={role === 'admin' ? 'volcano' : role === 'instructor' ? 'blue' : 'green'}>
                    {role.toUpperCase()}
                </Tag>
            )
        },
        {
            title: 'Joined Date',
            dataIndex: 'created_at',
            key: 'joined',
            render: (date: string) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Status',
            dataIndex: 'is_active',
            key: 'status',
            render: (isActive: boolean) => (
                <Tag color={isActive ? 'success' : 'error'}>
                    {isActive ? 'ACTIVE' : 'INACTIVE'}
                </Tag>
            )
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

    return (
        <div>
            <HeaderActions>
                <h2>User Management</h2>
                <Button type="primary" icon={<UserAddOutlined />} size="large">
                    Add New User
                </Button>
            </HeaderActions>
            
            <Table 
                columns={columns} 
                dataSource={users} 
                rowKey="id" 
                loading={isLoading}
            />
        </div>
    );
}

