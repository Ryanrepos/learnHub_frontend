import styled from 'styled-components';

export const StyledHowWorks = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #ffffff;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 40px;
  }

  .works-card {
    background: #fff;
    border-radius: 24px;
    padding: 60px 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
    border: 1px solid #f8f9fa;
  }

  .role-group {
    margin-bottom: 80px;
    &:last-child { margin-bottom: 0; }
  }

  .role-label {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 40px;
    display: block;
  }

  .steps-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    z-index: 2;

    .icon-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: 16px;
      transition: transform 0.3s ease;
    }

    h4 {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }

    &:hover .icon-circle {
      transform: scale(1.1);
    }
  }

  /* Strelka (Curve) uchun stil */
  .curve-arrow {
    flex: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px; /* Strelkani biroz tepaga ko'tarish */
    
    img {
      width: 80px; /* SVG strelka o'lchami */
      opacity: 0.6;
    }
  }

  /* Ranglar */
  .student-icon { background-color: #000; color: #ffda00; }
  .teacher-icon { background-color: #ffda00; color: #000; }

  @media (max-width: 992px) {
    .steps-row {
      flex-direction: column;
      gap: 40px;
    }
    .curve-arrow {
      transform: rotate(90deg);
      padding: 0;
    }
  }
`;