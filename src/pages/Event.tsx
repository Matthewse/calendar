import { FC, useState } from 'react';
import { Button } from 'antd';
import EventCalendar from '../components/EventCalendar';
import './Event.css';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModalHandler = () => setIsModalOpen(true);

    return (
        <div className="wrapper">
            <Button type="primary" onClick={openModalHandler}>
                Добавить событие
            </Button>
            <EventCalendar />
        </div>
    );
};

export default Event;
