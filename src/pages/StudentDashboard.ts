import styled from "styled-components";

export const StyledDashboard = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 40px;

    /* Hero */
    .hero-section {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        padding: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }

    .welcome-title {
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 8px;
    }

    .welcome-subtitle {
        font-size: 15px;
        color: #6b7280;
        margin-bottom: 20px;
    }

    .continue-btn {
        background: #FFD700;
        border: none;
        padding: 10px 28px;
        border-radius: 30px;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;
        &:hover { background: #f0cc00; }
    }

    .progress-circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 6px solid #FFD700;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .progress-number {
        font-size: 24px;
        font-weight: 800;
    }

    .progress-label {
        font-size: 12px;
        color: #6b7280;
    }

    /* Stats */
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 40px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .stat-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .stat-label {
        font-size: 13px;
        color: #6b7280;
    }

    .stat-value {
        font-size: 28px;
        font-weight: 800;
    }

    /* Section */
    .section {
        margin-bottom: 40px;
    }

    .section-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    .section-subtitle {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
    }

    /* Courses Grid */
    .courses-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-bottom: 16px;

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 576px) {
            grid-template-columns: 1fr;
        }
    }

    .course-card {
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        overflow: hidden;
        transition: 0.2s;
        &:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
    }

    .course-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }

    .course-info {
        padding: 16px;
    }

    .course-title {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    .course-level {
        font-size: 12px;
        color: #6b7280;
        text-transform: capitalize;
        margin-bottom: 4px;
    }

    .course-desc {
        font-size: 13px;
        color: #6b7280;
        margin-bottom: 12px;
    }

    .progress-bar {
        width: 100%;
        height: 6px;
        background: #e5e7eb;
        border-radius: 10px;
        margin-bottom: 12px;
    }

    .progress-fill {
        height: 100%;
        background: #FFD700;
        border-radius: 10px;
    }

    .continue-course-btn {
        width: 100%;
        background: #FFD700;
        border: none;
        padding: 10px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s;
        &:hover { background: #f0cc00; }
    }

    .see-more-btn {
        background: #fff;
        border: 1px solid #e5e7eb;
        padding: 10px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        &:hover { background: #f9fafb; }
    }
`;