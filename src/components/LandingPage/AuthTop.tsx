import { ArrowRightOutlined } from '@ant-design/icons';
import { StyledAuthTop } from "./AuthTop";

export function AuthTop() {
    return (
        <StyledAuthTop>
            <div className="hero-section">
                <div className="container">

                    {/* Navbar */}
                    <nav className="navbar">
                        <div className="container" style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 0}}>
                            <div className="logo">EdA</div>

                            <div className="search-box">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="What do you want to learn?"
                                />
                                <button className="btn-yellow btn-circle">
                                    <ArrowRightOutlined />
                                </button>
                            </div>

                            <div className="nav-actions">
                                <span className="login-link">Login</span>
                                <button className="btn-yellow">Sign up</button>
                            </div>
                        </div>
                    </nav>

                    {/* Hero Content */}
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Unlock Your Future with <br /> World-Class Learning
                        </h1>
                        <p className="hero-subtitle">
                            Gain in-demand knowledge, grow your career, and learn from top instructors, anytime, anywhere.
                        </p>
                        <button className="btn-yellow btn-primary">
                            Get Started <ArrowRightOutlined />
                        </button>
                    </div>

                </div>
            </div>
        </StyledAuthTop>
    );
}