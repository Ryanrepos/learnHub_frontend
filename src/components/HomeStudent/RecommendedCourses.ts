import styled from "styled-components";

export const StyledRecommendedCourses = styled.div`
    width: 100%;
    padding: 40px 0;

    .section-header {
        margin-bottom: 24px;
    }

    .section-title {
        font-size: 24px;
        font-weight: 700;
        color: #000;
        margin-bottom: 4px;
    }

    .section-subtitle {
        font-size: 14px;
        color: #6b7280;
    }

    .courses-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-bottom: 24px;

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 576px) {
            grid-template-columns: 1fr;
        }
    }

    .course-card {
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease;

        &:hover {
            transform: translateY(-4px);
        }
    }

    .course-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
    }

    .course-info {
        padding: 12px 4px;
    }

    .instructor {
        font-size: 13px;
        color: #6b7280;
    }

    .course-title {
        font-size: 16px;
        font-weight: 700;
        color: #000;
        margin: 6px 0;
    }

    .course-meta {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: #6b7280;
    }

    .rating {
        color: #000;
        font-weight: 600;
    }

    .dot {
        color: #d1d5db;
    }

    .see-more-btn {
        background: #fff;
        border: 1px solid #e5e7eb;
        padding: 10px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            background: #f9fafb;
        }
    }
`;