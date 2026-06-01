import { useGetMe } from "../composables/useLogin.ts";
import { useGetMyCourses } from "../composables/useCourses.ts";
import { StyledDashboard } from "./StudentDashboard.ts";
import { useNavigate } from "react-router-dom";
import { Progress, Skeleton, Empty, Button } from 'antd';
import { 
    BookOutlined, 
    ThunderboltOutlined, 
    RiseOutlined, 
    FireOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';

export default function Dashboard() {
    const navigate = useNavigate();
    const { data: meData, isLoading: isUserLoading } = useGetMe();
    const user = meData?.data;
    const { data: coursesData, isLoading: isCoursesLoading } = useGetMyCourses();
    const courses = coursesData?.data || [];

    const isLoading = isUserLoading || isCoursesLoading;

    if (isLoading) {
        return (
            <StyledDashboard>
                <Skeleton active paragraph={{ rows: 10 }} />
            </StyledDashboard>
        );
    }

    const beginnerCount = courses.filter((c: any) => c.course?.level === 'beginner').length;
    const intermediateCount = courses.filter((c: any) => c.course?.level === 'intermediate').length;
    const advancedCount = courses.filter((c: any) => c.course?.level === 'advanced').length;

    return (
        <StyledDashboard>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="welcome-title">Welcome back, {user?.firstName}! 👋</h1>
                    <p className="welcome-subtitle">
                        You've enrolled in {courses.length} courses. You're doing great, 
                        keep up the momentum and reach your learning goals!
                    </p>
                    <button className="continue-btn" onClick={() => navigate('/student-home/my-courses')}>
                        Continue Learning
                    </button>
                </div>
                <div className="hero-visual">
                    <Progress 
                        type="circle" 
                        percent={Math.min(100, (courses.length / 10) * 100)} 
                        strokeColor="#FFD700"
                        trailColor="rgba(255,255,255,0.1)"
                        width={140}
                        format={() => (
                            <div style={{ color: 'white' }}>
                                <div style={{ fontSize: '24px', fontWeight: 800 }}>{courses.length}</div>
                                <div style={{ fontSize: '12px', opacity: 0.8 }}>Courses</div>
                            </div>
                        )}
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon icon-blue">
                        <BookOutlined />
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">Total Enrolled</span>
                        <span className="stat-value">{courses.length}</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-green">
                        <ThunderboltOutlined />
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">Beginner</span>
                        <span className="stat-value">{beginnerCount}</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-purple">
                        <RiseOutlined />
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">Intermediate</span>
                        <span className="stat-value">{intermediateCount}</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-orange">
                        <FireOutlined />
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">Advanced</span>
                        <span className="stat-value">{advancedCount}</span>
                    </div>
                </div>
            </div>

            {/* My Active Courses Section */}
            <div className="section">
                <div className="section-header">
                    <div className="section-title-group">
                        <h2 className="section-title">Continue Watching</h2>
                        <p className="section-subtitle">Pick up where you left off</p>
                    </div>
                    {courses.length > 3 && (
                        <Button 
                            type="link" 
                            onClick={() => navigate('/student-home/my-courses')}
                            icon={<ArrowRightOutlined />}
                            iconPosition="end"
                            style={{ fontWeight: 600, color: '#3b82f6' }}
                        >
                            View all courses
                        </Button>
                    )}
                </div>

                {courses.length === 0 ? (
                    <div style={{ background: 'white', padding: '60px', borderRadius: '24px', textAlign: 'center' }}>
                        <Empty description="No courses enrolled yet" />
                        <Button 
                            type="primary" 
                            size="large" 
                            style={{ marginTop: '20px', borderRadius: '10px', background: '#FFD700', color: '#1e293b', border: 'none', fontWeight: 700 }}
                            onClick={() => navigate('/student-home')}
                        >
                            Explore Courses
                        </Button>
                    </div>
                ) : (
                    <div className="courses-grid">
                        {courses.slice(0, 3).map((enrollment: any) => (
                            <div key={enrollment.course?.id} className="course-card">
                                <div className="course-image-wrapper">
                                    <img
                                        src={enrollment.course?.cover_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600'}
                                        alt={enrollment.course?.title}
                                        className="course-image"
                                    />
                                    <span className="course-badge">{enrollment.course?.level}</span>
                                </div>
                                <div className="course-info">
                                    <h3 className="course-title">{enrollment.course?.title}</h3>
                                    <p className="course-desc">{enrollment.course?.short_description || "Start learning this comprehensive course today and master new skills."}</p>
                                    
                                    <div className="course-footer">
                                        <div className="progress-group">
                                            <div className="progress-text">
                                                <span>Course Progress</span>
                                                <span className="progress-percent">40%</span>
                                            </div>
                                            <Progress 
                                                percent={40} 
                                                showInfo={false} 
                                                strokeColor="#FFD700"
                                                trailColor="#f1f5f9"
                                                strokeWidth={8}
                                            />
                                        </div>
                                        <button
                                            className="continue-course-btn"
                                            onClick={() => navigate(`/courses/${enrollment.course?.id}`)}
                                        >
                                            Resume Lesson
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </StyledDashboard>
    );
}
