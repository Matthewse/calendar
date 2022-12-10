import { FC, useState } from 'react';
import { Button, Card } from 'antd';
import { eventSlice } from '../../store/reducers/EventSlice';
import { useAppDispatch } from '../../hooks/redux';
import { EventModal } from '../../components';
import { IEvent } from '../../models/IEvent';
import './Event.css';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addEvent } = eventSlice.actions;
    const dispatch = useAppDispatch();

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    const submitFormHandler = (formValues: IEvent) => {
        console.log(formValues)
    };

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
                    submitForm={submitFormHandler}
                />
            </Card>
        </div>
    );
};

export default Event;
