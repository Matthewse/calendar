import { FC } from 'react';
import { Input, Modal, TimePicker } from 'antd';
import './EventModal.css';

interface IModalProps {
    title: string;
    isOpen: boolean;
    closeModal: () => void;
}

const EventModal: FC<IModalProps> = ({ title, isOpen, closeModal }) => {
    return (
        <Modal title={title} open={isOpen} onCancel={closeModal}>
            <div className='create-event-wrapper'>
                <Input className='new-event-field' placeholder="Новое событие" />
                <TimePicker className='time-picker' placeholder="Время начала" />
                <TimePicker className='time-picker' placeholder="Время окончания" />
            </div>
        </Modal>
    );
};

export default EventModal;
