import { NavLink, useNavigate } from 'react-router-dom';
import { 
    DashboardOutlined, 
    BookOutlined, 
    UserOutlined, 
    AppstoreOutlined, 
    SettingOutlined,
    LogoutOutlined 
} from '@ant-design/icons';
import { StyledSidebar } from './AdminSidebar.ts';
import { useAuthStore } from '../../store/auth.store.ts';
import { message } from 'antd';

export default function AdminSidebar() {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        message.success("Tizimdan chiqdingiz");
        navigate('/auth/login');
    };

    return (
        <StyledSidebar>
            <div className="logo" onClick={() => navigate('/admin')}>
                LearnHub Admin
            </div>

            <div className="nav-links">
                <NavLink to="/admin" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <DashboardOutlined className="icon" />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/admin/courses" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <BookOutlined className="icon" />
                    <span>Courses</span>
                </NavLink>

                <NavLink to="/admin/users" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <UserOutlined className="icon" />
                    <span>Users</span>
                </NavLink>

                <NavLink to="/admin/categories" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <AppstoreOutlined className="icon" />
                    <span>Categories</span>
                </NavLink>

                <NavLink to="/admin/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <SettingOutlined className="icon" />
                    <span>Settings</span>
                </NavLink>
            </div>

            <div className="logout-btn" onClick={handleLogout}>
                <LogoutOutlined className="icon" />
                <span>Logout</span>
            </div>
        </StyledSidebar>
    );
}
