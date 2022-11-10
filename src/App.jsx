import "./styles/App.scss"
import { Routes, Route, Link } from "react-router-dom"
import Card from "./components/Card"
import SearchPage from "./components/SearchPage"

function App() {
    return (
        <div className="App">
            <div className="tab-bar">
                <Link to="/">
                    <div className="tab-item-active">Home</div>
                </Link>
                <Link to="/search">
                    <div className="tab-item">Search</div>
                </Link>
            </div>
            <main>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Card />}
                    ></Route>
                    <Route
                        exact
                        path="/search"
                        element={<SearchPage />}
                    ></Route>
                </Routes>
            </main>
        </div>
    )
}

export default App
