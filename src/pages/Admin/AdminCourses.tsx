import { Table, Tag, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const HeaderActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export default function AdminCourses() {
    const columns = [
        {
            title: 'Course Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `$${price}`,
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (status: string) => (
                <Tag color={status === 'Published' ? 'green' : 'gold'}>
                    {status.toUpperCase()}
                </Tag>
            ),
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
            name: 'React for Beginners',
            category: 'Web Development',
            price: 49,
            status: 'Published',
        },
        {
            key: '2',
            name: 'Advanced TypeScript',
            category: 'Programming',
            price: 79,
            status: 'Draft',
        },
        {
            key: '3',
            name: 'Figma Mastery',
            category: 'Design',
            price: 59,
            status: 'Published',
        },
    ];

    return (
        <div>
            <HeaderActions>
                <h2>Course Management</h2>
                <Button type="primary" icon={<PlusOutlined />} size="large">
                    Add New Course
                </Button>
            </HeaderActions>
            
            <Table columns={columns} dataSource={data} />
        </div>
    );
}
