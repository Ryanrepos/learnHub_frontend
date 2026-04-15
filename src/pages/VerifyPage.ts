import styled from 'styled-components';

export const StyledVerify = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;

  .auth-banner {
    flex: 1;
    background-color: #ffda00;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    @media (max-width: 992px) { display: none; }
    img { max-width: 100%; height: auto; }
  }

  .auth-form-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .form-wrapper {
    width: 100%;
    max-width: 480px;
    text-align: center;
  }

  .verify-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .verify-subtitle {
    font-size: 15px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  /* OTP Input Styling */
  .ant-input-affix-wrapper {
    padding: 15px 20px;
    border-radius: 12px;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    
    input {
      font-size: 24px !important;
      font-weight: 700 !important;
      letter-spacing: 15px !important; /* Raqamlar orasidagi masofa */
      text-align: center;
      background: transparent;
    }

    .ant-input-prefix {
      margin-right: 12px;
      font-size: 18px;
      color: #9ca3af;
    }
  }

  .signup-btn {
    width: 100%;
    height: 52px;
    background-color: #ffda00;
    border: none;
    border-radius: 26px;
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    color: #000;
    transition: 0.3s;
    
    &:hover {
      background-color: #f0cc00 !important;
      color: #000 !important;
      transform: translateY(-1px);
    }
  }

  .resend-btn {
    display: block;
    margin: 30px auto 0;
    background: none;
    border: none;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color: #007aff;
    }
  }
`;