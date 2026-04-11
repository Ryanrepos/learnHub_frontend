import styled from 'styled-components';

export const StyledFeaturedCourses = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #ffffff;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-header {
    margin-bottom: 40px;
    h2 {
      font-size: 32px;
      font-weight: 800;
      color: #000;
      margin: 0;
    }
  }

  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .course-card {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #f3f4f6;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }
  }

  .image-wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .course-card:hover .image-wrapper img {
    transform: scale(1.1);
  }

  .course-info {
    padding: 20px;

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: #000;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      color: #8c8c8c;
      margin: 0;
    }
  }

  .pagination-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: 0.2s;

    &:hover {
      color: #ffda00;
      .next-arrow { transform: translateX(5px); }
    }

    .next-arrow {
      color: #ffda00;
      font-size: 18px;
      transition: 0.3s;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 0;
    .section-header h2 { font-size: 26px; text-align: center; }
  }
`;