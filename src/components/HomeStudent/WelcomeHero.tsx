import { StyledWelcomeHero } from "./WelcomeHero.ts";
import headerImage from "@/assets/headerImage.png";
import { useGetMe } from "@/composables/useLogin.ts"; 

export default function WelcomeHero() {
  const { data, isLoading } = useGetMe();
  const user = data?.data;

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledWelcomeHero>
      <div className="content-section">
        <h1 className="welcome-title">
          Welcome back, <br />
          {user?.firstName}!
        </h1>
        <p className="welcome-subtitle">
          Ready to continue your journey? Let's keep learning
          and building your future—one course at a time.
        </p>
        <button className="resume-btn">Resume My Course</button>
      </div>

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