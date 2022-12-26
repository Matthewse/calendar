import { FC } from 'react';
import { Space, Typography, Button } from 'antd';
import { IEvent } from '../../models/IEvent';
import './EventList.css';

const { Text } = Typography;

interface EventListProps {
    selectDateEvents: IEvent[] | undefined;
    deleteEventHandler: (id: string) => void;
}

const EventList: FC<EventListProps> = ({
    selectDateEvents,
    deleteEventHandler,
}) => {
    return (
        <div className="event-list">
            {selectDateEvents?.length ? (
                <Space direction="vertical">
                    {selectDateEvents.map((event) => (
                        <div key={event.id} className="event">
                            <div className="text-wrapper">
                                <Text>{event.name}</Text>
                                <Text type="secondary">
                                    c {event.startTime} до {event.endTime}
                                </Text>
                            </div>
                            <Button
                                type="link"
                                onClick={() => deleteEventHandler(event.id)}
                            >
                                Удалить
                            </Button>
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
