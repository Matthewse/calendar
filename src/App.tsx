import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Event } from './pages';

const App: FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Event />} />
            </Routes>
        </div>
    );
};

export default App;
