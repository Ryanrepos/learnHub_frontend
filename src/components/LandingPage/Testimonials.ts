import styled from 'styled-components';

export const StyledTestimonials = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #ffffff;

  .container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
    font-weight: 800;
    color: #000;
    margin-bottom: 40px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin-bottom: 30px;
  }

  .testimonial-card {
    background: #fff;
    border-radius: 20px;
    padding: 30px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 280px;
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
    }
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    .user-details {
      display: flex;
      gap: 12px;
      align-items: center;

      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
      }

      .name-job {
        h4 {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
        p {
          font-size: 13px;
          color: #8c8c8c;
          margin: 0;
        }
      }
    }

    .date {
      font-size: 13px;
      color: #9ca3af;
      font-weight: 600;
    }
  }

  .feedback-text {
    font-size: 15px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .rating-stars {
    .ant-rate {
      font-size: 16px;
      color: #ffda00;
    }
  }

  .next-pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
    
    &:hover {
      color: #ffda00;
      .arrow { transform: translateX(5px); }
    }
    
    .arrow {
      color: #ffda00;
      font-size: 18px;
      transition: 0.3s;
    }
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
`;