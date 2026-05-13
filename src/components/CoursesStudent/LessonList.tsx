import { useNavigate, useParams } from "react-router-dom";
import { Typography, Menu, Card, Button, Space, Spin } from "antd";
import { PlaySquareOutlined, FileTextOutlined, DownOutlined } from "@ant-design/icons";
import { useLessonsBySections } from "../../composables/useSections";
import { useSections } from "../../composables/useSections";
import { StyledLessonList } from "./LessonList.ts";
import { useState } from "react";

const { Title, Text } = Typography;

export default function LessonList() {
    const { sectionId, courseId } = useParams<{ sectionId: string; courseId: string }>();
    const navigate = useNavigate();

    const { data: lessonsData, isLoading: lessonsLoading } = useLessonsBySections(sectionId!);
    const { data: sectionsData, isLoading: sectionsLoading } = useSections(courseId!);

    const lessons = lessonsData?.data?.items || [];
    const sections = sectionsData?.data?.items || [];

    const currentSection = sections.find((s: any) => s.id === sectionId);

    const sidebarItems = sections.map((section: any) => ({
        key: section.id,
        label: section.title,
    }));

    if (lessonsLoading || sectionsLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <StyledLessonList>
            {/* Sidebar */}
            <div className="sidebar">
                <Title level={4} className="course-title">
                    {currentSection?.title || 'Course'}
                </Title>

                <div>
                    <div className="nav-section-header">
                        <Text className="nav-section-title">Courses Material</Text>
                        <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                    </div>
                    <Menu
                        mode="inline"
                        selectedKeys={[sectionId!]}
                        className="module-menu"
                        items={sidebarItems}
                        onClick={() => navigate(`/student-home/lessons/${lessons.id}`)}                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="content-area">
                <div className="content-header">
                    <Title level={2} className="module-header-title">
                        {currentSection?.title || 'Section'}
                    </Title>
                    <Text className="module-stats">
                        {lessons.length} Items • {lessons.reduce((acc: number, l: any) => acc + (l.duration_sec || 0), 0)} min
                    </Text>
                </div>

                <div className="lessons-container">
                    {lessons.length === 0 ? (
                        <Text type="secondary">No lessons found.</Text>
                    ) : (
                        lessons.map((lesson: any) => (
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

                               <Button
                                    className="open-btn"
                                    onClick={() => navigate(`/student-home/lessons/${lesson.id}`)}
                                >
                                    Open
                                </Button>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </StyledLessonList>
    );
}