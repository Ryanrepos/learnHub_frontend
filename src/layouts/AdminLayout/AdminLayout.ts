import styled from 'styled-components';

export const StyledAdminLayout = styled.div`
    display: flex;
    min-height: 100vh;
    background: #f9fafb;

    .admin-content {
        flex: 1;
        margin-left: 260px;
        padding: 40px;
        transition: all 0.3s;
    }

    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;

        h1 {
            font-size: 28px;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }

            .name {
                font-weight: 500;
                color: #374151;
            }
        }
    }
`;
