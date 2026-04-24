import { useNavigate } from "react-router-dom";
import { Button, Progress, Typography } from "antd";
import { useSections } from "../../composables/useSections";

const { Text } = Typography;

interface CourseSectionsProps {
    courseId: string;
    status: string;
}

export default function CourseSections({ courseId, status }: CourseSectionsProps) {
    const navigate = useNavigate();
    const { data: sectionsData, isLoading } = useSections(courseId);
    const sections = sectionsData?.data?.items || [];

    if (isLoading) return <div style={{ padding: '16px' }}>Loading sections...</div>;
    if (!sections.length) return <div style={{ padding: '16px' }}>No sections found.</div>;

    return (
        <div className="sections-list">
            {sections.map((section: any) => (
                <div key={section.id} className="section-item">
                    <div className="section-info">
                        <Text strong>{section.title}</Text>
                        <Text type="secondary" style={{ fontSize: 13 }}>
                            {section.progress || 0}% Complete
                        </Text>
                        <Progress
                            percent={section.progress || 0}
                            strokeColor="#22c55e"
                            showInfo={false}
                            size="small"
                        />
                    </div>
                    <Button
                        style={{
                            background: '#FFD700',
                            border: 'none',
                            borderRadius: 30,
                            fontWeight: 700,
                            minWidth: 80,
                        }}
                        onClick={() => navigate(`/sections/${section.id}`)}
                    >
                        {status === 'completed' ? 'View'
                            : status === 'in_progress' ? 'Resume'
                            : 'Start'}
                    </Button>
                </div>
            ))}
        </div>
    );
}