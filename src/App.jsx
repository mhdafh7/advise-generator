import "./styles/App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <div className="tab-bar">
                <div className="tab-item">Home</div>
                <div className="tab-item">Search</div>
            </div>
            <main></main>
        </div>
    )
}

export default App
