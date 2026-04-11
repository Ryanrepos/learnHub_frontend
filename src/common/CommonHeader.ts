import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f3f4f6;
    position: sticky;
    top: 0;
    z-index: 100;

    .header-container {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 32px;
        font-weight: 700;
        font-family: 'Cursive', sans-serif;
    }

    .search-wrapper {
        flex: 0 1 500px;
        position: relative;
        display: flex;
        align-items: center;

        input {
            width: 100%;
            padding: 12px 20px 12px 45px;
            border-radius: 30px;
            border: 1px solid #e5e7eb;
            outline: none;
            font-size: 14px;
        }

        .search-icon {
            position: absolute;
            left: 18px;
            color: #9ca3af;
        }

        .search-btn {
            position: absolute;
            right: 5px;
            background: #FFD700;
            border: none;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }

    .nav-items {
        display: flex;
        gap: 24px;
        align-items: center;

        span {
            font-size: 15px;
            font-weight: 500;
            color: #6b7280;
            cursor: pointer;
            &.active { color: #000; font-weight: 700; }
        }
    }

    .user-actions {
        display: flex;
        align-items: center;
        gap: 20px;

        .notification-icon { font-size: 20px; cursor: pointer; }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
        }
    }
`;