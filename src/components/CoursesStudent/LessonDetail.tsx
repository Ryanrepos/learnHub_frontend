import { useParams, useNavigate } from "react-router-dom";
import { Typography, Spin } from "antd";
import { 
  CaretRightOutlined, 
  SoundOutlined, 
  DownloadOutlined, 
  MessageOutlined, 
  SettingOutlined, 
  FullscreenOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import { useLessons } from "../../composables/useLessons";
import { StyledLessonDetail } from "./LessonDetail.ts";
import { useRef, useState } from "react";

const { Title, Text } = Typography;

export default function LessonDetail() {
    const { lessonId } = useParams<{ lessonId: string }>();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const { data: lessonResponse, isLoading } = useLessons(lessonId!);
    const lesson = lessonResponse?.data;

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20vh' }}>
                <Spin size="large" tip="Loading video..." />
            </div>
        );
    }

    return (
        <StyledLessonDetail>
            <div className="header">
                <Title level={4} style={{ margin: 0 }}>
                    {lesson?.title || "Python"}
                </Title>
                <button className="next-btn">
                    Next <ArrowRightOutlined style={{ color: '#FFD900' }} />
                </button>
            </div>

            <div className="video-container" onClick={togglePlay}>
                {/* ACTUAL VIDEO TAG */}
                <video 
                    ref={videoRef}
                    src={lesson?.video_url} 
                    poster={lesson?.thumbnail_url}
                    style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }}
                />

                {/* Show play button overlay only when paused */}
                {!isPlaying && (
                    <div className="play-center-btn" style={{ position: 'absolute', zIndex: 2 }}>
                        <CaretRightOutlined />
                    </div>
                )}

                {/* Footer Controls */}
                <div className="video-controls" onClick={(e) => e.stopPropagation()}>
                    <div onClick={togglePlay} style={{ cursor: 'pointer' }}>
                        <CaretRightOutlined />
                    </div>
                    <SoundOutlined />
                    <Text className="time-text">0:00</Text>
                    
                    <div className="progress-bar-wrapper">
                        <div className="progress-fill" style={{ width: '0%' }} />
                    </div>
                    
                    <Text className="time-text">{lesson?.duration_sec}s</Text>
                    
                    <div className="control-icons">
                        <DownloadOutlined onClick={() => window.open(lesson?.video_url)} />
                        <MessageOutlined />
                        <SettingOutlined />
                        <FullscreenOutlined onClick={() => videoRef.current?.requestFullscreen()} />
                    </div>
                </div>
            </div>
        </StyledLessonDetail>
    );
}