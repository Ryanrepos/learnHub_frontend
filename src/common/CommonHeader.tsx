import { StyledHeader } from './CommonHeader.ts';
import { SearchOutlined, ArrowRightOutlined, BellOutlined, CaretDownOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, type MenuProps, message } from 'antd';
import { useAuthStore } from '../store/auth.store.ts';

export default function CommonHeader() {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        message.success("Tizimdan chiqdingiz");
        navigate('/');
    };

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <DashboardOutlined />,
            onClick: () => navigate('/dashboard')
        },
        { type: 'divider' },
        {
            key: 'logout',
            danger: true,
            label: 'Log out',
            icon: <LogoutOutlined />,
            onClick: handleLogout
        },
    ];

    return (
        <StyledHeader>
            <div className="header-container">
                <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    EdA
                </div>

                <div className="search-wrapper">
                    <SearchOutlined className="search-icon" />
                    <input type="text" placeholder="What do you want to learn" />
                    <button className="search-btn">
                        <ArrowRightOutlined />
                    </button>
                </div>

                <div className="nav-items">
                    <span onClick={() => navigate('/')}>Home</span>
                    <span onClick={() => navigate('/dashboard')}>Dashboard</span>
                    <span className="active" onClick={() => navigate('/courses')}>My Courses</span>
                </div>

                <div className="user-actions">
                    <BellOutlined className="notification-icon" />
                    <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <img
                                src="https://i.pravatar.cc/150?u=fake@pravatar.com"
                                alt={user?.firstName}
                                className="avatar"
                            />
                            <CaretDownOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </StyledHeader>
    );
}