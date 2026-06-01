import styled from "styled-components";

export const StyledDashboard = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 40px;
    background-color: #f8fafc;
    min-height: 100vh;

    /* Hero */
    .hero-section {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        border-radius: 24px;
        padding: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        color: white;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 300px;
            height: 300px;
            background: rgba(255, 215, 0, 0.1);
            border-radius: 50%;
            filter: blur(60px);
        }
    }

    .hero-content {
        z-index: 1;
    }

    .welcome-title {
        font-size: 36px;
        font-weight: 800;
        margin-bottom: 12px;
        color: #fff;
    }

    .welcome-subtitle {
        font-size: 18px;
        color: #cbd5e1;
        margin-bottom: 24px;
        max-width: 500px;
        line-height: 1.6;
    }

    .continue-btn {
        background: #FFD700;
        border: none;
        padding: 12px 32px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 16px;
        color: #1e293b;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 14px 0 rgba(255, 215, 0, 0.39);
        
        &:hover { 
            background: #f0cc00;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.45);
        }
    }

    .hero-visual {
        display: flex;
        align-items: center;
        gap: 32px;
        z-index: 1;
    }

    /* Stats */
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin-bottom: 40px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    }

    .stat-card {
        background: #fff;
        border-radius: 20px;
        padding: 24px;
        display: flex;
        align-items: center;
        gap: 20px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
        border: 1px solid #f1f5f9;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
    }

    .stat-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }

    .icon-blue { background: #eff6ff; color: #3b82f6; }
    .icon-green { background: #f0fdf4; color: #22c55e; }
    .icon-purple { background: #faf5ff; color: #a855f7; }
    .icon-orange { background: #fff7ed; color: #f97316; }

    .stat-info {
        display: flex;
        flex-direction: column;
    }

    .stat-label {
        font-size: 14px;
        color: #64748b;
        font-weight: 500;
    }

    .stat-value {
        font-size: 24px;
        font-weight: 800;
        color: #1e293b;
    }

    /* Section Header */
    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 24px;
    }

    .section-title-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .section-title {
        font-size: 24px;
        font-weight: 800;
        color: #1e293b;
        margin: 0;
    }

    .section-subtitle {
        font-size: 15px;
        color: #64748b;
        margin: 0;
    }

    /* Courses Grid */
    .courses-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
        margin-bottom: 32px;

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    .course-card {
        background: #fff;
        border-radius: 24px;
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #f1f5f9;
        display: flex;
        flex-direction: column;

        &:hover { 
            transform: translateY(-8px); 
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); 
        }
    }

    .course-image-wrapper {
        position: relative;
        height: 200px;
    }

    .course-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .course-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
        color: #1e293b;
    }

    .course-info {
        padding: 24px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .course-title {
        font-size: 18px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 8px;
        line-height: 1.4;
    }

    .course-desc {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 20px;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .course-footer {
        margin-top: auto;
    }

    .progress-group {
        margin-bottom: 16px;
    }

    .progress-text {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 6px;
        color: #1e293b;
    }

    .progress-percent { color: #3b82f6; }

    .continue-course-btn {
        width: 100%;
        background: #f1f5f9;
        border: none;
        padding: 12px;
        border-radius: 12px;
        font-weight: 700;
        color: #1e293b;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover { 
            background: #FFD700;
            color: #1e293b;
        }
    }

    .see-more-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background: white;
        border: 1px solid #e2e8f0;
        padding: 10px 24px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        color: #475569;
        cursor: pointer;
        transition: all 0.2s ease;
        margin: 0 auto;

        &:hover { 
            border-color: #cbd5e1;
            background: #f8fafc;
        }
    }
`;