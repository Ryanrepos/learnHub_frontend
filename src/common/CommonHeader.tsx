import { StyledHeader } from './CommonHeader.ts';
import { SearchOutlined, ArrowRightOutlined, BellOutlined, CaretDownOutlined } from '@ant-design/icons';

export default function CommonHeader() {
    return (
        <StyledHeader>
            <div className="header-container">
                <div className="logo">LearnHub</div>

                <div className="search-wrapper">
                    <SearchOutlined className="search-icon" />
                    <input type="text" placeholder="What do you want to learn" />
                    <button className="search-btn">
                        <ArrowRightOutlined />
                    </button>
                </div>

                <div className="nav-items">
                    <span>Home</span>
                    <span>Dashboard</span>
                    <span className="active">My Courses</span>
                </div>

                <div className="user-actions">
                    <BellOutlined className="notification-icon" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img
                            src="https://i.pravatar.cc/150?u=fake@pravatar.com"
                            alt="user"
                            className="avatar"
                        />
                        <CaretDownOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
}