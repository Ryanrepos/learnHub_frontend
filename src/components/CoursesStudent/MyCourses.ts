import styled from "styled-components";

export const StyledMyCourses = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 40px;

    .page-title {
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 24px;
    }

    .filter-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
        flex-wrap: wrap;
    }

    .tab-filters {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .tab-btn {
        border-radius: 30px !important;
        font-weight: 500;
    }

    .course-item {
        margin-bottom: 16px;
        border-radius: 16px !important;
        overflow: hidden;
    }

    .course-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        cursor: pointer;
    }

    .course-title-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }

    .completion-banner {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 12px 0;
    }

    .toggle-btn {
        font-size: 18px;
        color: #6b7280;
        background-color: #FFD900 !important;
    }

    /* Sections */
    .sections-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 16px;
        border-top: 1px solid #f3f4f6;
        padding-top: 16px;
    }

    .section-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        gap: 16px;
    }

    .section-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`;