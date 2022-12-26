import { FC } from 'react';
import { Button, Form, Input, Modal, TimePicker, message } from 'antd';
import type { Dayjs } from 'dayjs';
import { v4 as uuid } from 'uuid';
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
    id: string;
}

const EventModal: FC<EventModalProps> = ({
    title,
    isOpen,
    closeModal,
    submitForm,
}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const onFinish = (fieldsValue: FormValues) => {
        const rangeTimeValue = fieldsValue['time'];
        const values = {
            ...fieldsValue,
            startTime: rangeTimeValue && rangeTimeValue[0].format('hh:mm'),
            endTime: rangeTimeValue && rangeTimeValue[1].format('hh:mm'),
        };
        delete values.time;
        values.id = uuid();
        submitForm && submitForm(values);
        messageApi.open({
            type: 'success',
            content: 'Событие добавлено!',
        });
        form.resetFields();
    };

    return (
        <Modal title={title} open={isOpen} onCancel={closeModal} footer={false}>
            {contextHolder}
            <Form
                form={form}
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
