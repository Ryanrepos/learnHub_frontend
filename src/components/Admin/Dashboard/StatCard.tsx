import styled from 'styled-components';

const Card = styled.div`
    background: white;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #f3f4f6;
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }

    .info {
        h3 {
            font-size: 14px;
            color: #6b7280;
            margin: 0 0 4px 0;
            font-weight: 500;
        }
        p {
            font-size: 24px;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
        }
    }
`;

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}

export default function StatCard({ title, value, icon, color, bgColor }: StatCardProps) {
    return (
        <Card>
            <div className="icon-wrapper" style={{ color, background: bgColor }}>
                {icon}
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </Card>
    );
}
