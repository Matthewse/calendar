import { Calendar } from 'antd';

interface ICalendarProps {
    onDateSelect: () => void;
}

const EventCalendar: React.FC<ICalendarProps> = ({ onDateSelect }) => {
    return <Calendar onSelect={onDateSelect} />;
};

export default EventCalendar;
