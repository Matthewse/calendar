import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import { Home, Event } from './pages';

const App: FC = () => {
    const { events } = useAppSelector((state) => state.eventReducer);
    console.log('state', events);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Event />} />
        </Routes>
    );
};

export default App;
