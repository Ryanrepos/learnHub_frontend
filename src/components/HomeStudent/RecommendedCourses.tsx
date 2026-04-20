import { useGetCourses } from "@/composables/useLogin.ts";
import { StyledRecommendedCourses } from "./RecommendedCourses";

export default function RecommendedCourses() {
    const { data, isLoading } = useGetCourses({ limit: 3 });
    const courses = data?.data?.items || [];

    if (isLoading) return <div>Loading...</div>;

    return (
        <StyledRecommendedCourses>
            <div className="section-header">
                <h2 className="section-title">Recommended Courses</h2>
                <p className="section-subtitle">Courses handpicked for you</p>
            </div>

            <div className="courses-grid">
                {courses.map((course: any) => (
                    <div key={course.id} className="course-card">
                        <img
                            src={course.thumbnail_url || 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400'}
                            alt={course.title}
                            className="course-image"
                        />
                        <div className="course-info">
                            <span className="instructor">
                                {course.instructor?.firstName} {course.instructor?.lastName}
                            </span>
                            <h3 className="course-title">{course.title}</h3>
                            <div className="course-meta">
                                <span className="rating">⭐ {course.rating || '—'}</span>
                                <span className="dot">·</span>
                                <span>{course.duration || '—'}</span>
                                <span className="dot">·</span>
                                <span>{course.level}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="see-more-btn">See more</button>
        </StyledRecommendedCourses>
    );
}