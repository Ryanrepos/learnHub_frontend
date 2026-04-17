import React from "react";
import { StyledWelcomeHero } from "./WelcomeHero.ts";
import headerImage from "@/assets/headerImage.png";

interface WelcomeHeroProps {
  userName?: string;
  courseName?: string;
}

export default function WelcomeHero({
  userName = "John",
  courseName = "UI/UX and AI",
}: WelcomeHeroProps) {
  return (
    <StyledWelcomeHero>
      {/* Matn qismi */}
      <div className="content-section">
        <h1 className="welcome-title">
          Welcome back, <br />
          {userName}!
        </h1>
        <p className="welcome-subtitle">
          Ready to continue your journey in {courseName}? Let's keep learning
          and building your future—one course at a time.
        </p>
        <button className="resume-btn">Resume My Course</button>
      </div>

      {/* Rasm qismi */}
      <div className="image-section">
        <div className="yellow-circle">
          <img
            src={headerImage}
            alt="Learning Illustration"
            className="hero-illustration"
          />
        </div>
      </div>
    </StyledWelcomeHero>
  );
}