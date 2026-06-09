import { UserOutlined, BookOutlined, DollarOutlined, AppstoreOutlined } from '@ant-design/icons';
import StatCard from '../../components/Admin/Dashboard/StatCard.tsx';
import styled from 'styled-components';

const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
`;

const ChartPlaceholder = styled.div`
    background: white;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #f3f4f6;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    font-size: 18px;
`;

export default function AdminDashboard() {
    return (
        <div>
            <DashboardGrid>
                <StatCard 
                    title="Total Users" 
                    value="1,234" 
                    icon={<UserOutlined />} 
                    color="#3b82f6" 
                    bgColor="#eff6ff" 
                />
                <StatCard 
                    title="Total Courses" 
                    value="45" 
                    icon={<BookOutlined />} 
                    color="#10b981" 
                    bgColor="#ecfdf5" 
                />
                <StatCard 
                    title="Total Revenue" 
                    value="$12,840" 
                    icon={<DollarOutlined />} 
                    color="#f59e0b" 
                    bgColor="#fffbeb" 
                />
                <StatCard 
                    title="Active Categories" 
                    value="12" 
                    icon={<AppstoreOutlined />} 
                    color="#8b5cf6" 
                    bgColor="#f5f3ff" 
                />
            </DashboardGrid>

            <h2>Revenue Overview</h2>
            <br />
            <ChartPlaceholder>
                [ Revenue Chart will be here ]
            </ChartPlaceholder>
        </div>
    );
}
