import styled from 'styled-components';

export const StyledChooseUs = styled.section`
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
    font-weight: 700;
    color: #000;
    margin-bottom: 48px;
    font-family: 'Inter', sans-serif;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .card {
    background: #fff;
    border-radius: 12px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 230px;
    /* Dizayndagi yengil soya */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    border: 1px solid #f8f9fa;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
      transform: translateY(-5px);
    }
  }

  .card-top {
    h3 {
      font-size: 18px;
      font-weight: 700;
      color: #000;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      color: #8c8c8c;
      line-height: 1.5;
    }
  }

  .arrow-circle {
    width: 44px;
    height: 44px;
    background-color: #ffda00; /* Dizayndagi sariq rang */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    border: none;

    svg {
      font-size: 20px;
      color: #000;
      transform: rotate(-45deg); /* Dizayndagi kabi strelka tepaga qaragan */
    }

    &:hover {
      background-color: #f0cc00;
      svg {
        transform: rotate(0deg); /* Hover bo'lganda to'g'rilanadi */
      }
    }
  }

  @media (max-width: 768px) {
    padding: 50px 0;
    .section-title {
      text-align: center;
    }
  }
`;