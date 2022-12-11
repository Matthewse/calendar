import { FC, useState } from 'react';
import { Button, Card } from 'antd';
import { useParams } from 'react-router-dom';
import { eventSlice } from '../../store/reducers/EventSlice';
import { useAppDispatch } from '../../hooks/redux';
import { EventModal } from '../../components';
import { IEvent } from '../../models/IEvent';
import './Event.css';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { addEvent } = eventSlice.actions;

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    const submitFormHandler = (formValues: IEvent) => {
        formValues.date = id;
        dispatch(addEvent(formValues));
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
