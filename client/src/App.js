import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Dashboard from "./pages/Dashboard";
import Door from "./pages/Door";
import LedFan from "./pages/LedFan";
import TemperHumi from "./pages/TemperHumi";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notification from "./pages/Notification";
import Light from "./pages/Light";
import User from './pages/User';
import { useSelector } from "react-redux"

function App() {
    const user = useSelector((state) => state.auth_.login?.currentUser)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                {/* {user && ( */}
                    <Route element={<DefaultLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/door" element={<Door />} />
                        <Route path="/ledFan" element={<LedFan />} />
                        <Route path="/light" element={<Light />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/temperHumi" element={<TemperHumi />} />
                        <Route path="/user" element={<User />} />
                    </Route>
                
                <Route path="*" element={<div><h1>Error 404: Page not found</h1></div>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
