import styled from "styled-components";

export const StyledLessonDetail = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .next-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #000;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 16px;
    
    &:hover { opacity: 0.7; }
  }

  .video-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #ffffff;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-center-btn {
    width: 64px;
    height: 64px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  /* Custom Video Controls mimicking Figma */
  .video-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 24px;
    background: #fff;
    display: flex;
    align-items: center;
    gap: 16px;
    border-top: 1px solid #f0f0f0;
  }

  .progress-bar-wrapper {
    flex: 1;
    height: 6px;
    background: #eeeeee;
    border-radius: 3px;
    position: relative;
  }

  .progress-fill {
    width: 40%; /* dynamic */
    height: 100%;
    background: #FFD900;
    border-radius: 3px;
  }

  .time-text {
    font-size: 14px;
    color: #555;
    min-width: 40px;
  }

  .control-icons {
    display: flex;
    gap: 16px;
    font-size: 18px;
    color: #595959;
    cursor: pointer;
  }
`;