import styled from "styled-components";

export const StyledProfile = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 40px;

    .page-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 24px;
    }

    .section {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 24px;
    }

    .section-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .form-row {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;
    }

    .form-input {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        transition: 0.2s;

        &:focus {
            border-color: #FFD700;
        }

        &.full {
            width: 100%;
        }
    }

    .form-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 8px;
    }

    .save-btn {
        background: #FFD700;
        color: #000;
        border: none;
        padding: 12px 32px;
        border-radius: 30px;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            background: #f0cc00;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;