import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import type { Dayjs } from 'dayjs';
import { EventCalendar, EventModal } from '../../components';
import './Home.css';

const Home: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = () => setIsModalOpen(true);
    const closeModalHandler = () => setIsModalOpen(false);

    const renderDateCell = (value: Dayjs) => {
        const date = value.format('DD-MM-YYYY');

        return (
            <Link className='link' to={`/${date}`}></Link>
        );
    };

    return (
        <div className="wrapper">
            <Button type="primary" onClick={openModalHandler}>
                Добавить событие
            </Button>
            <EventCalendar
                renderCell={renderDateCell}
            />
            <EventModal
                title="Добавление события"
                isOpen={isModalOpen}
                closeModal={closeModalHandler}
            />
        </div>
    );
};

export default Home;
