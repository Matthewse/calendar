import { FC } from 'react';
import { Space, Typography } from 'antd';
import { IEvent } from '../../models/IEvent';
import './EventList.css';

const { Text } = Typography;

interface EventListProps {
    selectDateEvents: IEvent[] | undefined;
}

const EventList: FC<EventListProps> = ({ selectDateEvents }) => {
    return (
        <div className="event-list">
            {selectDateEvents?.length ? (
                <Space direction="vertical">
                    {selectDateEvents.map((event) => (
                        <div key={event.name} className="event">
                            <Text>{event.name}</Text>
                            <Text type="secondary">
                                c {event.startTime} до {event.endTime}
                            </Text>
                        </div>
                    ))}
                </Space>
            ) : (
                <Text type="secondary">
                    На выбранную дату ничего не запланировано
                </Text>
            )}
        </div>
    );
};

export default EventList;
