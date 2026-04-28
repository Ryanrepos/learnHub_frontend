import { useParams } from "react-router-dom";
import { Typography, Menu, Card, Button, Space, Spin } from "antd";
import { PlaySquareOutlined, FileTextOutlined } from "@ant-design/icons";
import { useLessonsBySections } from "../../composables/useSections";
import { StyledLessonList } from "./LessonList.ts";

const { Title, Text } = Typography;

export default function LessonList() {
    const { sectionId } = useParams<{ sectionId: string }>();
    const { data: lessonsData, isLoading } = useLessonsBySections(sectionId!);
    console.log("Full API Response Object:", lessonsData);
    const lessons = lessonsData?.data?.items || [];
    console.log("Fetched lessons:", lessons);

    // Mock data for the sidebar modules (In a real app, fetch these from course info)
    const modules = [
        { key: '1', label: 'Lesson 1' },
        { key: '2', label: 'Lesson 2' },
        { key: '3', label: 'Lesson 3' },
    ];

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <StyledLessonList>
            {/* Sidebar Navigation */}
            <div className="sidebar">
                <Title level={4} className="course-title">
                    {lessons[0]?.title || 'Course Title'}
                </Title>
                
                <div>
                    <Text className="nav-section-title">Course Material</Text>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className="module-menu"
                        items={modules}
                    />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="content-area">
                <div className="content-header">
                    <Title level={2} className="module-header-title">
                        {lessons[0]?.title || 'Course Title'}
                    </Title>
                    <Text className="module-stats">
                        {lessons.length} Items • 40 minutes • 1 quiz
                    </Text>
                </div>

                <div className="lessons-container">
                    {lessons.map((lesson: any) => (
                        <Card key={lesson.id} className="lesson-card">
                            <div className="lesson-row">
                                <div className="lesson-info-group">
                                    <div className="icon-wrapper">
                                        {lesson.type === 'quiz' ? (
                                            <FileTextOutlined style={{ color: '#000' }} />
                                        ) : (
                                            <PlaySquareOutlined style={{ color: '#000' }} />
                                        )}
                                    </div>
                                    <Space direction="vertical" size={0}>
                                        <Text strong style={{ fontSize: 16 }}>
                                            {lesson.title}
                                        </Text>
                                        <Text type="secondary" style={{ fontSize: 13 }}>
                                            {lesson.type === 'quiz' ? 'Quiz' : 'Video'} • {lesson.duration_sec} min
                                        </Text>
                                    </Space>
                                </div>
                                
                                <Button className="open-btn">
                                    Open
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </StyledLessonList>
    );
}