import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const AuthLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
            <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <Outlet />
                </div>
            </Content>
        </Layout>
    );
};

export default AuthLayout;