import styled from "styled-components";

export const StyledCategoryExplorer = styled.div`
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

    .categories-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }

    .category-card {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 24px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            border-color: #FFD700;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            transform: translateY(-2px);
        }
    }

    .category-title {
        font-size: 16px;
        font-weight: 700;
        color: #000;
        margin-bottom: 8px;
    }

    .category-description {
        font-size: 13px;
        color: #6b7280;
        line-height: 1.5;
    }
`;