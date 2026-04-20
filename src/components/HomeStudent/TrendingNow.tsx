import { useGetCourses } from '@/composables/useLogin.ts';
import { StyledTrendingNow } from './TrendingNow.ts';

export default function TrendingNow() {
    const { data, isLoading } = useGetCourses({ limit: 3 });
    const courses = data?.data?.items || [];

    if (isLoading) return <div>Loading...</div>;

    return (
        <StyledTrendingNow>
            <div className="section-header">
                <h2 className="section-title">Trending Now</h2>
                <p className="section-subtitle">Courses everyone is talking about — start learning what's trending</p>
            </div>

            <div className="courses-grid">
                {courses.map((course: any) => (
                    <div key={course.id} className="course-card">
                        <img
                            src={course.thumbnail_url || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400'}
                            alt={course.title}
                            className="course-image"
                        />
                        <div className="course-info">
                            <span className="instructor">
                                {course.instructor?.firstName} {course.instructor?.lastName}
                            </span>
                            <h3 className="course-title">{course.title}</h3>
                            <div className="course-meta">
                                <span>{course.duration || '—'}</span>
                                <span className="dot">•</span>
                                <span>{course.level}</span>
                                <span className="dot">•</span>
                                <span className="rating">⭐ {course.rating || '—'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="see-more-btn">See more</button>
        </StyledTrendingNow>
    );
}