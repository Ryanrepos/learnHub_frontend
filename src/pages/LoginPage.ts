import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;

  /* Chap tarafdagi sariq qism */
  .auth-banner {
    flex: 1;
    background-color: #ffda00;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    @media (max-width: 992px) {
      display: none; /* Mobilda faqat forma qoladi */
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  /* O'ng tarafdagi forma qismi */
  .auth-form-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .form-wrapper {
    width: 100%;
    max-width: 450px;
  }

  .login-title {
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
  }

  /* Input va label stillari */
  .ant-form-item-label > label {
    font-weight: 600;
    color: #1f2937;
  }

  .ant-input-affix-wrapper {
    padding: 12px 15px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
  }

  .forgot-password {
    color: #ff4d4f;
    font-size: 14px;
    font-weight: 600;
  }

  .login-btn {
    width: 100%;
    height: 50px;
    background-color: #ffda00;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    &:hover {
      background-color: #f0cc00 !important;
      color: black !important;
    }
  }

  .social-divider {
    text-align: center;
    margin: 30px 0;
    position: relative;
    color: #9ca3af;
    &::before, &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 30%;
      height: 1px;
      background: #e5e7eb;
    }
    &::before { left: 0; }
    &::after { right: 0; }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    
    .social-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e5e7eb;
      cursor: pointer;
      font-size: 24px;
      transition: 0.3s;
      &:hover { background: #f9fafb; }
    }
  }

  .signup-text {
    text-align: center;
    color: #4b5563;
    span {
      color: #007aff;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;