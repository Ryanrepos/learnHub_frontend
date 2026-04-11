import { ArrowRightOutlined } from '@ant-design/icons';
import {StyledChooseUs} from "./ChooseUs.ts";

const chooseUsData = [
    {
        id: 1,
        title: 'Expert Instructors',
        description: 'Learn from industry leaders.',
    },
    {
        id: 2,
        title: 'Learn Anytime',
        description: 'Flexible, self-paced content.',
    },
    {
        id: 3,
        title: 'Verified Certificates',
        description: 'Get certified after completion.',
    },
    {
        id: 4,
        title: 'Lifetime Access',
        description: 'Access your courses anytime.',
    },
];

export function ChooseUs() {
    return (
        <StyledChooseUs>
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>

                <div className="cards-grid">
                    {chooseUsData.map((item) => (
                        <div key={item.id} className="card">
                            <div className="card-top">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>

                            <button className="arrow-circle">
                                <ArrowRightOutlined />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </StyledChooseUs>
    );
}