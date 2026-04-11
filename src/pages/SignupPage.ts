import styled from 'styled-components';

export const StyledSignUp = styled.div`
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
  }

  .signup-title {
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 30px;
  }

  /* Role Switcher (Student/Instructor) */
  .role-switcher {
    display: flex;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 30px;
    padding: 5px;
    margin-bottom: 30px;
    
    .role-btn {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
      background: transparent;
      color: #6b7280;
      
      &.active {
        background: #ffda00;
        color: #000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
    }
  }

  .ant-input-affix-wrapper {
    padding: 12px 15px;
    border-radius: 12px;
  }

  .next-btn {
    width: 100%;
    height: 50px;
    background-color: #ffda00;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    color: #000;
    &:hover {
      background-color: #f0cc00 !important;
      color: black !important;
    }
  }

  .social-divider {
    text-align: center;
    margin: 25px 0;
    position: relative;
    color: #9ca3af;
    font-size: 14px;
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
    gap: 15px;
    margin-bottom: 25px;
    .social-btn {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e5e7eb;
      cursor: pointer;
      font-size: 20px;
    }
  }

  .login-link {
    text-align: center;
    font-size: 14px;
    span { color: #007aff; font-weight: 700; cursor: pointer; }
  }
`;