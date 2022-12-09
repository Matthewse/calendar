import { FC } from 'react';
import { Button, Form, Input, Modal, TimePicker } from 'antd';
import { getRequiredMessage } from '../../utils';
import './EventModal.css';

const { RangePicker } = TimePicker;

interface IEventModalProps {
    title: string;
    isOpen: boolean;
    closeModal: () => void;
}

const EventModal: FC<IEventModalProps> = ({ title, isOpen, closeModal }) => {
    return (
        <Modal title={title} open={isOpen} onCancel={closeModal} footer={false}>
            <Form
                name="basic"
                className="create-event-form"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={getRequiredMessage('Введите название события')}
                >
                    <Input placeholder="Название" />
                </Form.Item>
                <Form.Item rules={getRequiredMessage('Выберите время события')}>
                    <RangePicker
                        className="time-picker"
                        placeholder={['Время начала', 'Время окончания']}
                        format={'hh:mm'}
                    />
                </Form.Item>
                <Form.Item className="buttons-wrapper">
                    <Button className="button" type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                    <Button className="button" onClick={closeModal}>
                        Отмена
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EventModal;
