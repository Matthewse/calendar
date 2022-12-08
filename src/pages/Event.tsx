import { FC, useState } from 'react';
import { Button } from 'antd';
import { EventCalendar } from '../components/EventCalendar';
import { EventModal } from '../components/EventModal';
import './Event.css';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    return (
        <div className="wrapper">
            <Button type="primary" onClick={openModalHandler}>
                Добавить событие
            </Button>
            <EventCalendar onDateSelect={openModalHandler} />
            <EventModal
                title="Просмотр событий"
                isOpen={isModalOpen}
                closeModal={closeModalHandler}
            />
        </div>
    );
};

export default Event;
