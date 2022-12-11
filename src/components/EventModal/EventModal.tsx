import { FC } from 'react';
import { Button, Form, Input, Modal, TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { getRequiredMessage } from '../../utils';
import { IEvent } from '../../models/IEvent';
import './EventModal.css';

const { RangePicker } = TimePicker;

interface EventModalProps {
    title: string;
    isOpen: boolean;
    closeModal: () => void;
    submitForm?: (formValues: IEvent) => void;
}

interface FormValues {
    name: string;
    time?: Dayjs;
}

const EventModal: FC<EventModalProps> = ({
    title,
    isOpen,
    closeModal,
    submitForm,
}) => {
    const onFinish = (fieldsValue: FormValues) => {
        const rangeTimeValue = fieldsValue['time'];
        const values = {
            ...fieldsValue,
            startTime: rangeTimeValue && rangeTimeValue[0].format('hh:mm'),
            endTime: rangeTimeValue && rangeTimeValue[1].format('hh:mm'),
        };
        delete values.time;
        submitForm && submitForm(values);
    };

    return (
        <Modal title={title} open={isOpen} onCancel={closeModal} footer={false}>
            <Form
                name="event-form"
                className="create-event-form"
                onFinish={onFinish}
            >
                <Form.Item
                    name="name"
                    rules={getRequiredMessage('Введите название события')}
                >
                    <Input placeholder="Название" />
                </Form.Item>
                <Form.Item
                    name="time"
                    rules={getRequiredMessage('Выберите время события')}
                >
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
