import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

import Home from "./Home";
import TrainersList from "./TrainersList";
import TrainerDetails from "./TrainerDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>

                        <li>
                            <Link to="/trainers">
                                Trainers
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/home" />}
                    />

                    <Route
                        path="/home"
                        element={<Home />}
                    />

                    <Route
                        path="/trainers"
                        element={<TrainersList />}
                    />

                    <Route
                        path="/trainer/:id"
                        element={<TrainerDetails />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;