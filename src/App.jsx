import './styles/App.scss';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdviceCard from './components/AdviceCard';
import SearchPage from './components/SearchPage';

function App() {
    // TODO: active and inactive
    const [currentTab, setCurrentTab] = useState('home');

    const handleTabChange = (tabName) => {
        setCurrentTab(tabName);
    };

    return (
        <div className="App">
            <div className="tab-bar">
                <Link to="/">
                    <div
                        onClick={() => handleTabChange('home')}
                        className={
                            'tab-item' +
                            (currentTab === 'home' ? '-active' : '')
                        }
                    >
                        Home
                    </div>
                </Link>
                <Link to="/search">
                    <div
                        onClick={() => handleTabChange('search')}
                        className={
                            'tab-item' +
                            (currentTab === 'search' ? '-active' : '')
                        }
                    >
                        Search
                    </div>
                </Link>
            </div>
            <main>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<AdviceCard />}
                    ></Route>
                    <Route
                        exact
                        path="/search"
                        element={<SearchPage />}
                    ></Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
