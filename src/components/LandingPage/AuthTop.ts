import styled from 'styled-components';

export const StyledAuthTop = styled.div`
  width: 100%;
  
  .hero-section {
    width: 100%;
    min-height: 95vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%), 
                url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 24px 0;
    z-index: 10;
  }

  .nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: -1px;
    cursor: pointer;
    background: linear-gradient(to right, #fff, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  .search-box {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    padding: 6px 8px 6px 24px;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus-within {
      background: rgba(255, 255, 255, 0.15);
      border-color: #FFD700;
      box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.1);
      width: 420px;
    }
  }

  .search-input {
    background: transparent;
    border: none;
    color: #fff;
    outline: none;
    width: 300px;
    font-size: 15px;
    font-weight: 500;
    &::placeholder { color: rgba(255, 255, 255, 0.6); }
  } 

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .user-profile-trigger {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 100px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .user-name {
      font-weight: 600;
      font-size: 15px;
      color: white;
    }
  }

  .hero-content {
    margin-top: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInUp 0.8s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-title {
    color: white;
    font-size: 72px;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -2px;
    
    @media (max-width: 1024px) {
      font-size: 56px;
    }
  }

  .hero-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 22px;
    max-width: 750px;
    margin-bottom: 48px;
    line-height: 1.6;
    font-weight: 400;
  }

  .btn-yellow {
    background: #FFD700;
    color: #0f172a;
    border: none;
    padding: 14px 36px;
    font-size: 17px;
    font-weight: 800;
    border-radius: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
  }

  .btn-yellow:hover {
    background: #fff;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 24px rgba(255, 215, 0, 0.4);
  }

  .btn-primary {
    padding: 18px 56px;
    font-size: 20px;
  }

  .btn-circle {
    padding: 10px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    justify-content: center;
    box-shadow: none;
    
    &:hover {
      transform: rotate(90deg);
    }
  }

  .login-link {
    color: #fff;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);

    &:hover { 
      background: rgba(255, 255, 255, 0.1);
      border-color: #fff;
    }
  }

  @media (max-width: 768px) {
    .hero-title { font-size: 42px; letter-spacing: -1px; }
    .hero-subtitle { font-size: 18px; }
    .search-box { display: none; }
    .nav-inner { padding: 0 20px; }
  }
`;