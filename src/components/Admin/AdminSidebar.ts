import styled from 'styled-components';

export const StyledSidebar = styled.div`
    width: 260px;
    height: 100vh;
    background: #1a1a1a;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    position: fixed;
    left: 0;
    top: 0;

    .logo {
        font-size: 24px;
        font-weight: 700;
        padding: 0 24px;
        margin-bottom: 40px;
        color: #FFD700;
        cursor: pointer;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 24px;
        color: #9ca3af;
        text-decoration: none;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            color: white;
            background: rgba(255, 255, 255, 0.05);
        }

        &.active {
            color: white;
            background: rgba(255, 215, 0, 0.1);
            border-right: 4px solid #FFD700;
        }

        .icon {
            font-size: 20px;
        }
    }

    .logout-btn {
        margin-top: auto;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: #ef4444;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background: rgba(239, 68, 68, 0.1);
        }
    }
`;
