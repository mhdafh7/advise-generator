import "./styles/App.scss"
import { Routes, Route, Link } from "react-router-dom"
import AdviceCard from "./components/AdviceCard"
import SearchPage from "./components/SearchPage"
import { useEffect, useState } from "react"

function App() {
    const [width, setWidth] = useState(window.innerWidth)
    // const [currentTab, setCurrentTab] = useState(0)

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange)
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange)
        }
    }, [])
    const isMobile = width <= 768

    // const handleTabChange = (tabState) => {}

    return (
        <div className="App">
            <div className="tab-bar">
                <Link
                    to="/"
                    // onClick={handleTabChange}
                >
                    <div className="tab-item">Home</div>
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
    )
}

export default App
