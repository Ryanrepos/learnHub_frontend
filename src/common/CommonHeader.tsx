import { StyledHeader } from './CommonHeader.ts';
import { SearchOutlined, ArrowRightOutlined, BellOutlined, CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown, type MenuProps, message } from 'antd';
import { useAuthStore } from '../store/auth.store.ts';
import { useGetMe, useUpdateAvatar } from '../composables/useLogin.ts';
import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function CommonHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuthStore();
    const { data } = useGetMe();
    const user = data?.data;
    const avatarUrl = user?.avatar_url;
    const { mutate: uploadAvatar } = useUpdateAvatar();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Dashboard', path: '/student-home/dashboard' },
        { label: 'My Courses', path: '/student-home/my-courses' },
    ];

    const handleLogout = () => {
        logout();
        queryClient.clear();
        message.success("Tizimdan chiqdingiz");
        navigate('/');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) uploadAvatar(file);
    };

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'profile',
            label: 'Profile',
            onClick: () => navigate('/student-home/update-profile')
        },
        {
            key: 'my-plan',
            label: 'My plan',
            onClick: () => navigate('/my-plan')
        },
        {
            key: 'settings',
            label: 'Settings',
            onClick: () => navigate('/settings')
        },
        { type: 'divider' },
        {
            key: 'logout',
            danger: true,
            label: 'Logout',
            icon: <LogoutOutlined />,
            onClick: handleLogout
        },
    ];

    return (
        <StyledHeader>
            <div className="header-container">
                <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    LearnHub
                </div>

                <div className="search-wrapper">
                    <SearchOutlined className="search-icon" />
                    <input type="text" placeholder="What do you want to learn" />
                    <button className="search-btn">
                        <ArrowRightOutlined />
                    </button>
                </div>

                <div className="nav-items">
                    {navItems.map(({ label, path }) => (
                        <span
                            key={path}
                            className={location.pathname === path ? 'active' : ''}
                            onClick={() => navigate(path)}
                        >
                            {label}
                        </span>
                    ))}
                </div>

                <div className="user-actions">
                    <BellOutlined className="notification-icon" />

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />

                    <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <img
                                src={avatarUrl || 'https://i.pravatar.cc/150?u=fake@pravatar.com'}
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