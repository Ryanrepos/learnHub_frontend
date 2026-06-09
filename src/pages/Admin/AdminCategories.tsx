import { Table, Button, Space, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

const HeaderActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export default function AdminCategories() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleAdd = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log('Success:', values);
            setIsModalVisible(false);
            form.resetFields();
        });
    };

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Course Count',
            dataIndex: 'count',
            key: 'count',
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
            name: 'Web Development',
            count: 15,
        },
        {
            key: '2',
            name: 'Mobile Development',
            count: 8,
        },
        {
            key: '3',
            name: 'Design',
            count: 12,
        },
    ];

    return (
        <div>
            <HeaderActions>
                <h2>Category Management</h2>
                <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} size="large">
                    Add New Category
                </Button>
            </HeaderActions>
            
            <Table columns={columns} dataSource={data} />

            <Modal 
                title="Add New Category" 
                open={isModalVisible} 
                onOk={handleOk} 
                onCancel={() => setIsModalVisible(false)}
            >
                <Form form={form} layout="vertical">
                    <Form.Item 
                        name="name" 
                        label="Category Name" 
                        rules={[{ required: true, message: 'Please input the category name!' }]}
                    >
                        <Input placeholder="Enter category name" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

