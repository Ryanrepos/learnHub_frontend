import { ArrowRightOutlined, UserOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, type MenuProps, message } from 'antd';
import { useAuthStore } from '../../store/auth.store';
import { useGetMe } from '../../composables/useLogin';
import { StyledAuthTop } from './AuthTop';
import { useQueryClient } from '@tanstack/react-query';

export function AuthTop() {
    const navigate = useNavigate();
    const { logout } = useAuthStore();
    const { data } = useGetMe();
    const user = data?.data; 
    const queryClient = useQueryClient(); 


   const handleLogout = () => {
        logout();
        queryClient.clear(); // ✅ barcha cache tozalanadi
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
        {
            type: 'divider',
        },
        {
            key: 'logout',
            danger: true,
            label: 'Log out',
            icon: <LogoutOutlined />,
            onClick: handleLogout
        },
    ];

    return (
        <StyledAuthTop>
            <div className="hero-section">
                <div className="container">

                    <nav className="navbar">
                        <div className="nav-inner">
                            <div className="logo" onClick={() => navigate('/')}>LearnHub</div>

                            <div className="search-box">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="What do you want to learn today?"
                                />
                                <button className="btn-yellow btn-circle">
                                    <ArrowRightOutlined />
                                </button>
                            </div>

                            <div className="nav-actions">
                                {user ? (
                                    <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                                        <div className="user-profile-trigger">
                                            <span className="user-name">{user.firstName}</span>
                                            <Avatar
                                                style={{ backgroundColor: '#FFD700', color: '#0f172a' }}
                                                icon={<UserOutlined />}
                                            />
                                        </div>
                                    </Dropdown>
                                ) : (
                                    <>
                                        <span onClick={() => navigate('/auth/login')} className="login-link">Login</span>
                                        <button onClick={() => navigate('/auth/register')} className="btn-yellow">
                                            Join Now
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>

                    <div className="hero-content">
                        <h1 className="hero-title">
                            Unlock Your Potential <br /> With World-Class Skills
                        </h1>
                        <p className="hero-subtitle">
                            Join over 5 million learners worldwide. Master new skills, advance your career, and explore your passions with expert-led courses.
                        </p>
                        <button
                            onClick={() => navigate(user ? '/student-home' : '/auth/register')}
                            className="btn-yellow btn-primary"
                        >
                            {user ? 'Continue Learning' : 'Start for Free'} <ArrowRightOutlined />
                        </button>
                    </div>

                </div>
            </div>
        </StyledAuthTop>
    );
}