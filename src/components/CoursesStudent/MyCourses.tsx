import { useState } from "react";
import { useGetMyCourses } from "../../composables/useCourses";
import { useNavigate } from "react-router-dom";
import { Card, Tag, Progress, Button, Select, Space, Typography, Badge } from "antd";
import { StyledMyCourses } from "./MyCourses.ts";
import CourseSections from "./CourseSections";

const { Title, Text } = Typography;

export default function MyCourses() {
    const navigate = useNavigate();
    const { data: coursesData, isLoading } = useGetMyCourses();
    const courses = coursesData?.data || [];
    const [filter, setFilter] = useState('all');
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

    const inProgress = courses.filter((e: any) => e.status === 'in_progress');
    const completed = courses.filter((e: any) => e.status === 'completed');
    const notStarted = courses.filter((e: any) => e.status === 'not_started');

    const filteredCourses = filter === 'all' ? courses
        : filter === 'in_progress' ? inProgress
        : filter === 'completed' ? completed
        : notStarted;

    const getStatusColor = (status: string) => {
        if (status === 'completed') return 'success';
        if (status === 'in_progress') return 'warning';
        return 'error';
    };

    const getStatusLabel = (status: string) => {
        if (status === 'completed') return 'Completed';
        if (status === 'in_progress') return 'In Progress';
        return 'Not Started';
    };

    return (
        <StyledMyCourses>
            <Title level={2} className="page-title">My Courses</Title>

            {/* Filters */}
            <div className="filter-row">
                <Space>
                    <Select
                        defaultValue="sort"
                        style={{ width: 100 }}
                        options={[
                            { value: 'sort', label: 'Sort' },
                            { value: 'newest', label: 'Newest' },
                            { value: 'oldest', label: 'Oldest' },
                        ]}
                    />
                    <Select
                        defaultValue="category"
                        style={{ width: 120 }}
                        options={[
                            { value: 'category', label: 'Category' },
                        ]}
                    />
                </Space>

                <div className="tab-filters">
                    <Button
                        className="tab-btn"
                        type={filter === 'all' ? 'primary' : 'default'}
                        onClick={() => setFilter('all')}
                        style={filter === 'all' ? { background: '#000', border: 'none' } : {}}
                    >
                        All {courses.length}
                    </Button>
                    <Button
                        className="tab-btn"
                        type={filter === 'in_progress' ? 'primary' : 'default'}
                        onClick={() => setFilter('in_progress')}
                        style={filter === 'in_progress' ? { background: '#000', border: 'none' } : {}}
                    >
                        <Badge color="gold" /> In Progress {inProgress.length}
                    </Button>
                    <Button
                        className="tab-btn"
                        type={filter === 'completed' ? 'primary' : 'default'}
                        onClick={() => setFilter('completed')}
                        style={filter === 'completed' ? { background: '#000', border: 'none' } : {}}
                    >
                        <Badge color="green" /> Completed {completed.length}
                    </Button>
                    <Button
                        className="tab-btn"
                        type={filter === 'not_started' ? 'primary' : 'default'}
                        onClick={() => setFilter('not_started')}
                        style={filter === 'not_started' ? { background: '#000', border: 'none' } : {}}
                    >
                        <Badge color="red" /> Not Started {notStarted.length}
                    </Button>
                </div>
            </div>

            {/* Course List */}
            {filteredCourses.map((enrollment: any) => (
                <Card
                    key={enrollment.course?.id}
                    className="course-item"
                    loading={isLoading}
                >
                    {/* Header */}
                    <div
                        className="course-header"
                        onClick={() => setExpandedCourse(
                            expandedCourse === enrollment.course?.id
                                ? null
                                : enrollment.course?.id
                        )}
                    >
                        <div className="course-title-row">
                            <Tag color={getStatusColor(enrollment.status)}>
                                {getStatusLabel(enrollment.status)}
                            </Tag>
                            <Text strong style={{ fontSize: 18 }}>
                                {enrollment.course?.title}
                            </Text>
                            <Text type="secondary" style={{ fontSize: 13 }}>
                                {enrollment.course?.level} • {enrollment.course?.total_students} students
                            </Text>
                        </div>
                        <Button type="text" className="toggle-btn">
                            {expandedCourse === enrollment.course?.id ? '↑' : '↓'}
                        </Button>
                    </div>

                    {/* Completion Banner */}
                    {enrollment.status === 'completed' && (
                        <div className="completion-banner">
                            <Text style={{ color: '#166534', fontWeight: 500 }}>
                                🎉 Congratulations on completing {enrollment.course?.title}!
                            </Text>
                            <Space>
                                <Button
                                    style={{ background: '#FFD700', border: 'none', borderRadius: 30, fontWeight: 700 }}
                                    onClick={() => navigate(`/courses/${enrollment.course?.id}`)}
                                >
                                    View
                                </Button>
                                <Button style={{ borderRadius: 30 }}>Add to LinkedIn</Button>
                            </Space>
                        </div>
                    )}

                    {/* Progress */}
                    <div className="progress-row">
                        <Progress
                            percent={enrollment.progress}
                            strokeColor={enrollment.status === 'completed' ? '#22c55e' : '#FFD700'}
                            style={{ flex: 1 }}
                        />
                    </div>

                    {/* Sections */}
                    {expandedCourse === enrollment.course?.id && (
                        <CourseSections
                            courseId={enrollment.course?.id}
                            status={enrollment.status}
                        />
                    )}
                </Card>
            ))}
        </StyledMyCourses>
    );
}