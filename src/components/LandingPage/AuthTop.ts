import styled from 'styled-components';

export const StyledAuthTop = styled.div`
  width: 100%;
  
  .hero-section {
    width: 100%;
    min-height: 85vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), 
                url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3");
    background-size: cover;
    background-position: center;
    color: white;
    position: relative;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  }

  .logo {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .search-box {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    padding: 6px 10px 6px 20px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .search-input {
    background: transparent;
    border: none;
    color: #000;
    outline: none;
    width: 350px;
    &::placeholder { color: #9ca3af; }
  } 

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  /* User Profile UI */
  .user-profile-trigger {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    padding: 6px 16px;
    border-radius: 30px;
    transition: 0.3s;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .user-name {
      font-weight: 600;
      font-size: 15px;
      color: white;
      @media (max-width: 480px) { display: none; }
    }
  }

  .hero-content {
    margin-top: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    color: white;
    font-size: 64px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .hero-subtitle {
    color: rgba(255, 255, 255, 0.85);
    font-size: 20px;
    max-width: 700px;
    margin-bottom: 40px;
  }

  .btn-yellow {
    background: #FFD700;
    color: #000;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
  }

  .btn-yellow:hover {
    background: #fadb14;
    transform: translateY(-2px);
  }

  .btn-primary {
    padding: 15px 45px;
    font-size: 18px;
  }

  .btn-circle {
    padding: 8px;
    border-radius: 50%;
  }

  .login-link {
    background: #FFF;
    color: #000;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
    &:hover { background: #f3f4f6; }
  }

  @media (max-width: 768px) {
    .hero-title { font-size: 36px; }
    .search-box { display: none; }
    .navbar { padding: 20px 15px; }
  }
`;