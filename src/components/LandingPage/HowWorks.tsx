
import {
    LoginOutlined,
    BookOutlined,
    DesktopOutlined,
    SafetyCertificateOutlined,
    FormOutlined,
    AppstoreAddOutlined,
    CloudUploadOutlined,
    LineChartOutlined
} from '@ant-design/icons';
import {StyledHowWorks} from "./HowWorks.ts";

// Strelka uchun oddiy SVG curve (nuqtali)
const DashedCurve = ({ color = "#D1D5DB" }: { color?: string }) => (
    <div className="curve-arrow">
        <svg width="81" height="24" viewBox="0 0 81 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 23C1 23 20.5 1 40.5 1C60.5 1 80 23 80 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
            <path d="M74 23H80V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

export function HowWorks() {
    return (
        <StyledHowWorks>
            <div className="container">
                <h2 className="section-title">How It Works</h2>

                <div className="works-card">
                    {/* As a Student */}
                    <div className="role-group">
                        <span className="role-label">As a Student</span>
                        <div className="steps-row">
                            <div className="step-item">
                                <div className="icon-circle student-icon"><LoginOutlined /></div>
                                <h4>Sign Up</h4>
                            </div>
                            <DashedCurve />
                            <div className="step-item">
                                <div className="icon-circle student-icon"><BookOutlined /></div>
                                <h4>Choose Courses</h4>
                            </div>
                            <DashedCurve />
                            <div className="step-item">
                                <div className="icon-circle student-icon"><DesktopOutlined /></div>
                                <h4>Start Learning</h4>
                            </div>
                            <DashedCurve />
                            <div className="step-item">
                                <div className="icon-circle student-icon"><SafetyCertificateOutlined /></div>
                                <h4>Earn Certificates</h4>
                            </div>
                        </div>
                    </div>

                    {/* As a Teacher */}
                    <div className="role-group">
                        <span className="role-label">As a Teacher</span>
                        <div className="steps-row">
                            <div className="step-item">
                                <div className="icon-circle teacher-icon"><FormOutlined /></div>
                                <h4>Create an Account</h4>
                            </div>
                            <DashedCurve color="#FFDA00" />
                            <div className="step-item">
                                <div className="icon-circle teacher-icon"><AppstoreAddOutlined /></div>
                                <h4>Build Your Course</h4>
                            </div>
                            <DashedCurve color="#FFDA00" />
                            <div className="step-item">
                                <div className="icon-circle teacher-icon"><CloudUploadOutlined /></div>
                                <h4>Publish & Teach</h4>
                            </div>
                            <DashedCurve color="#FFDA00" />
                            <div className="step-item">
                                <div className="icon-circle teacher-icon"><LineChartOutlined /></div>
                                <h4>Track Students' Progress</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHowWorks>
    );
}