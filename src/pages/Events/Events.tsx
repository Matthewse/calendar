import { FC, useState, useEffect } from 'react';
import { Button, Card } from 'antd';
import { useParams } from 'react-router-dom';
import { eventSlice } from '../../store/reducers/EventSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { EventModal, EventList } from '../../components';
import { IEvent } from '../../models/IEvent';
import './Events.css';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectDateEvents, setSelectDateEvents] = useState<IEvent[]>();
    const { events } = useAppSelector((state) => state.eventReducer);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { addEvent, deleteEvent } = eventSlice.actions;

    useEffect(() => {
        const dateEvents = id && events[id];
        if (dateEvents) setSelectDateEvents(dateEvents);
    }, [events, id]);

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    const submitFormHandler = (formValues: IEvent) => {
        formValues.date = id;
        dispatch(addEvent(formValues));
        setIsModalOpen(false);
    };

    const deleteEventHandler = (eventId: string) => {
        dispatch(deleteEvent({id: eventId, date: id || '' }));
    };

    return (
        <div className="wrapper">
            <Card className="event-card">
                <Button type="primary" onClick={openModalHandler}>
                    Добавить событие
                </Button>
                <EventList
                    selectDateEvents={selectDateEvents}
                    deleteEventHandler={deleteEventHandler}
                />
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
