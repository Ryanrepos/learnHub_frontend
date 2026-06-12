import { UserOutlined, BookOutlined, DollarOutlined, AppstoreOutlined } from '@ant-design/icons';
import StatCard from '../../components/Admin/Dashboard/StatCard.tsx';
import styled from 'styled-components';
import { useGetUsersByAdmin } from '@/composables/useUsers.ts';
import { Alert } from 'antd';
import { useGetCoursesByAdmin } from '@/composables/useCourses.ts';
import { useNavigate } from 'react-router-dom';

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
    const { data: users, isLoading: isLoadingUsers, error } = useGetUsersByAdmin();
    const totalUsers = users?.data?.pagination?.total || 0;
    const { data: courses, isLoading: isLoadingCourses } = useGetCoursesByAdmin();  
    const totalCourses = courses?.data?.pagination?.total || 0;

    const navigate = useNavigate();
    return (
        <div>
            {error && (
                <Alert
                    message="Access Denied"
                    description="You do not have permission to view admin data. Please log in with an Admin account."
                    type="error"
                    showIcon
                    style={{ marginBottom: '24px' }}
                />
            )}
            <DashboardGrid>
                <StatCard onClick={() => navigate('/admin/users')}
                    title="Total Users" 
                    value={isLoadingUsers ? '...' : totalUsers} 
                    icon={<UserOutlined />} 
                    color="#3b82f6" 
                    bgColor="#eff6ff" 
                />
                <StatCard 
                    title="Total Courses" 
                    value={isLoadingCourses ? '...' : totalCourses} 
                    icon={<BookOutlined />} 
                    color="#10b981" 
                    bgColor="#ecfdf5" 
                    onClick={() => navigate('/admin/courses')}
                />
                <StatCard 
                    title="Total Revenue" 
                    value="$0" 
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
                    onClick={() => navigate('/admin/categories')}
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
