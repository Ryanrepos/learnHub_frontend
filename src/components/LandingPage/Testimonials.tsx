import { Rate } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import {StyledTestimonials} from "./Testimonials.ts";

const feedbackData = [
    {
        id: 1,
        name: 'Marta G.',
        course: 'UI/UX Design Essentials',
        date: '2D',
        feedback: 'I landed my first internship thanks to this platform! The structure and hands-on projects made learning fun and effective.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?u=marta'
    },
    {
        id: 2,
        name: 'Samuel T.',
        course: 'Full Stack Development',
        date: '1D',
        feedback: 'Clear videos, engaging quizzes, and the project-based lessons were a game changer for me. Highly recommended!',
        rating: 4,
        avatar: 'https://i.pravatar.cc/150?u=samuel'
    },
    {
        id: 3,
        name: 'Hana K.',
        course: 'Intro to AI',
        date: '4D',
        feedback: 'The best part was how easy it was to track my progress. I now feel confident applying AI concepts in my job.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?u=hana'
    }
];

export function Testimonials() {
    return (
        <StyledTestimonials>
            <div className="container">
                <h2 className="section-title">Testimonials</h2>

                <div className="testimonials-grid">
                    {feedbackData.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="user-info">
                                <div className="user-details">
                                    <img src={item.avatar} alt={item.name} />
                                    <div className="name-job">
                                        <h4>{item.name}</h4>
                                        <p>{item.course}</p>
                                    </div>
                                </div>
                                <span className="date">{item.date}</span>
                            </div>

                            <p className="feedback-text">{item.feedback}</p>

                            <div className="rating-stars">
                                <Rate disabled defaultValue={item.rating} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="next-pagination">
                    <span>Next</span>
                    <ArrowRightOutlined className="arrow" />
                </div>
            </div>
        </StyledTestimonials>
    );
}