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

  /* Navbar qismi */
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
  }

  .search-box {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    backdrop-filter: blur(10px);
    padding: 6px 10px 6px 20px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .search-input {
    background: transparent;
    border: none;
    color: white;
    outline: none;
    width: 400px;
    &::placeholder { color: #000 }
  } 
    .nav-actions {
        display: flex;
        align-items: center;
        gap: 20px;
    }

  /* Kontent qismi */
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

  /* Tugmalar */
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

  @media (max-width: 768px) {
    .hero-title { font-size: 36px; }
    .search-box { display: none; } /* Mobilda qidiruvni yashirish yoki boshqa ko'rinish */
  }
`;