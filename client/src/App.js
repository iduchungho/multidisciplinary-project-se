import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/layouts/DefaultLayout';
import Dashboard from "./pages/Dashboard";
import Door from "./pages/Door";
import LedFan from "./pages/LedFan";
import TemperHumi from "./pages/TemperHumi";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notification from "./pages/Notification";
import Light from "./pages/Light";

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                <Route element={<DefaultLayout></DefaultLayout>}>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                    <Route path="/door" element={<Door></Door>} />
                    <Route path="/ledFan" element={<LedFan></LedFan>} />
                    <Route path="/light" element={<Light></Light>}/>
                    <Route path="/notification" element={<Notification></Notification>} />
                    <Route path="/temperHumi" element={<TemperHumi></TemperHumi>} />
                    {/* <Route path="." element={<></>}></Route> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
