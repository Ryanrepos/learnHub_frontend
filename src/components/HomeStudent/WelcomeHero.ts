import styled from 'styled-components';

export const StyledWelcomeHero = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .content-section {
    flex: 1;
    max-width: 600px;
  }

  .welcome-title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.1;
    color: #000000;
    margin-bottom: 24px;
    
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  .welcome-subtitle {
    font-size: 18px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 500px;

    @media (max-width: 992px) {
      margin: 0 auto 32px;
    }
  }

  .resume-btn {
    background-color: #ffda00;
    color: #000;
    border: none;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0cc00;
      transform: translateY(-2px);
    }
  }

  /* Image Section with Yellow Circle */
  .image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .yellow-circle {
      width: 450px;
      height: 450px;
      background-color: #ffda00;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      @media (max-width: 1200px) {
        width: 350px;
        height: 350px;
      }

      @media (max-width: 480px) {
        width: 280px;
        height: 280px;
      }
    }

    .hero-illustration {
      width: 110%; /* Doiradan biroz chiqib turishi uchun */
      height: auto;
      z-index: 2;
    }
  }
`;