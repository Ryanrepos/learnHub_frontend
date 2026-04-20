import { useGetMe } from "../composables/useLogin.ts";
import { useGetMyCourses } from "../composables/useCourses.ts";
import { StyledDashboard } from "./StudentDashboard.ts";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const { data: meData } = useGetMe();
    const user = meData?.data;
    const { data: coursesData, isLoading } = useGetMyCourses();
    const courses = coursesData?.data || [];

    if (isLoading) return <div>Loading...</div>;

    return (
        <StyledDashboard>
            {/* Hero */}
            <div className="hero-section">
                <div className="hero-left">
                    <h1 className="welcome-title">Welcome back, {user?.firstName}!</h1>
                    <p className="welcome-subtitle">You've enrolled in {courses.length} courses. Keep it up!</p>
                    <button className="continue-btn" onClick={() => navigate('/student-home/my-courses')}>
                        Continue
                    </button>
                </div>
                <div className="hero-right">
                    <div className="progress-circle">
                        <span className="progress-number">{courses.length}</span>
                        <span className="progress-label">Courses</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-label">Courses Enrolled</span>
                    <span className="stat-value">{courses.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Beginner</span>
                    <span className="stat-value">{courses.filter((c: any) => c.course?.level === 'beginner').length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Intermediate</span>
                    <span className="stat-value">{courses.filter((c: any) => c.course?.level === 'intermediate').length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Advanced</span>
                    <span className="stat-value">{courses.filter((c: any) => c.course?.level === 'advanced').length}</span>
                </div>
            </div>

            {/* My Active Courses */}
            <div className="section">
                <h2 className="section-title">My Courses</h2>
                <p className="section-subtitle">Here's what you're currently learning</p>

                <div className="courses-grid">
                    {courses.slice(0, 3).map((enrollment: any) => (
                        <div key={enrollment.course?.id} className="course-card">
                            <img
                                src={enrollment.course?.cover_url || 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400'}
                                alt={enrollment.course?.title}
                                className="course-image"
                            />
                            <div className="course-info">
                                <h3 className="course-title">{enrollment.course?.title}</h3>
                                <p className="course-level">{enrollment.course?.level}</p>
                                <p className="course-desc">{enrollment.course?.short_description}</p>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '40%' }} />
                                </div>
                                <button
                                    className="continue-course-btn"
                                    onClick={() => navigate(`/courses/${enrollment.course?.id}`)}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {courses.length > 3 && (
                    <button className="see-more-btn" onClick={() => navigate('/student-home/my-courses')}>
                        See more
                    </button>
                )}
            </div>
        </StyledDashboard>
    );
}

