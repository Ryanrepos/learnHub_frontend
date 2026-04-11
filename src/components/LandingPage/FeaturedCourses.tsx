import { ArrowRightOutlined } from '@ant-design/icons';
import {StyledFeaturedCourses} from "./FeaturedCourses.ts";

const courses = [
    {
        id: 1,
        title: 'UI/UX Design Essentials',
        author: 'Sarah Thompson',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Full Stack Development',
        author: 'John Adewale',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Data Analysis Python',
        author: 'Amina Yusuf',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Digital Marketing 101',
        author: 'Carlos Mendoza',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop'
    }
];

export function FeaturedCourses() {
    return (
        <StyledFeaturedCourses>
            <div className="container">
                <div className="section-header">
                    <h2>Featured Courses</h2>
                </div>

                <div className="courses-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className="image-wrapper">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className="course-info">
                                <h3>{course.title}</h3>
                                <p>{course.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination-row">
                    <span>Next</span>
                    <ArrowRightOutlined className="next-arrow" />
                </div>
            </div>
        </StyledFeaturedCourses>
    );
}