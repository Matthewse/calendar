import { FC, ReactNode } from 'react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

interface ICalendarProps {
    renderCell: (value: Dayjs) => ReactNode;
}

const EventCalendar: FC<ICalendarProps> = ({ renderCell }) => {
    return <Calendar dateCellRender={renderCell} />;
};

export default EventCalendar;
