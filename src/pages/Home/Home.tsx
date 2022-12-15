import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import { useAppSelector } from '../../hooks/redux';
import { EventCalendar, EventModal } from '../../components';
import './Home.css';

const Home: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { events } = useAppSelector((state) => state.eventReducer);

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    const getListData = (date: string) => {
        if (events[date]) {
            return events[date];
        }
    };

    const renderDateCell = (value: Dayjs) => {
        const date = value.format('DD-MM-YYYY');
        const listData = getListData(date);

        return (
            <Link className="link" to={`/${date}`}>
                <div className="event-items-list">
                    {listData?.length &&
                        listData.slice(0, 4).map((event) => (
                            <div key={event.name}>
                                <Badge
                                    className="event-badge"
                                    status="success"
                                    text={event.name}
                                />
                            </div>
                        ))}
                </div>
            </Link>
        );
    };

    return (
        <div className="wrapper">
            <Button type="primary" onClick={openModalHandler}>
                Добавить событие
            </Button>
            <EventCalendar renderCell={renderDateCell} />
            <EventModal
                title="Добавление события"
                isOpen={isModalOpen}
                closeModal={closeModalHandler}
            />
        </div>
    );
};

export default Home;
