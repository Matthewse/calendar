import { FC, useState } from 'react';
import { Button, Card } from 'antd';
import { EventModal } from '../../components';
import './Event.css';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    return (
        <div className="wrapper">
            <Card className="event-card">
                <Button type="primary" onClick={openModalHandler}>
                    Добавить событие
                </Button>
                <EventModal
                    title="Добавление события"
                    isOpen={isModalOpen}
                    closeModal={closeModalHandler}
                />
            </Card>
        </div>
    );
};

export default Event;
