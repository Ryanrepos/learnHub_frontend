import styled from "styled-components";

export const StyledLessonList = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;

  /* Sidebar Styling */
  .sidebar {
    width: 300px;
    border-right: 1px solid #f0f0f0;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .course-title {
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2;
  }

  .nav-section-title {
    font-size: 14px;
    color: #8c8c8c;
    margin-bottom: 16px;
    display: block;
  }

  .module-menu {
    border: none !important;
    
    .ant-menu-item {
      height: 45px;
      line-height: 45px;
      border-radius: 8px !important;
      margin-bottom: 8px;
    }

    .ant-menu-item-selected {
      background-color: #f5f5f5 !important;
      color: #000000 !important;
      font-weight: 600;
    }
  }

  /* Main Content Styling */
  .content-area {
    flex: 1;
    background-color: #fafafa;
    padding: 48px;
    overflow-y: auto;
  }

  .content-header {
    max-width: 800px;
    margin: 0 auto 32px auto;
  }

  .module-header-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .module-stats {
    color: #8c8c8c;
    font-size: 14px;
  }

  /* Lesson Cards */
  .lessons-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .lesson-card {
    background: #ffffff;
    border: none;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    
    .ant-card-body {
      padding: 20px 24px;
    }
  }

  .lesson-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lesson-info-group {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .icon-wrapper {
    width: 44px;
    height: 44px;
    background-color: #f8f9fa;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .open-btn {
    background-color: #FFD900 !important;
    border: none !important;
    border-radius: 20px !important;
    font-weight: 700 !important;
    height: 38px !important;
    padding: 0 28px !important;
    color: #000 !important;

    &:hover {
      opacity: 0.9;
    }
  }
`;