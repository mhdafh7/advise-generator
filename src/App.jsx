import './styles/App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import AdviceCard from './components/AdviceCard';
import SearchPage from './components/SearchPage';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeToHome,
    changeToSearch,
    selectTab,
} from './features/tabs/tabSlice';

function App() {
    const activeTab = useSelector(selectTab);

    const dispatch = useDispatch();

    return (
        <div className="App">
            <div className="tab-bar">
                <Link
                    to="/"
                    onClick={() => dispatch(changeToHome())}
                >
                    <div
                        className={
                            'tab-item' + (activeTab === 'home' ? '-active' : '')
                        }
                    >
                        Home
                    </div>
                </Link>
                <Link
                    to="/search"
                    onClick={() => dispatch(changeToSearch())}
                >
                    <div
                        className={
                            'tab-item' +
                            (activeTab === 'search' ? '-active' : '')
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
