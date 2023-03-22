/* Lưu đường dẫn chuyển trang */
import Dashboard from "../pages/Dashboard";
import Door from "../pages/Door";
import LedFan from "../pages/LedFan";
import TemperHumi from "../pages/TemperHumi";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Notification from "../pages/Notification";
import Light from "../pages/Light";
const publicRoutes = [
    {
        path: '/',
        component: Dashboard,
        layout: 0
    },
    {
        path: '/door',
        component: Door,
        layout: 0
    },
    {
        path: '/ledFan',
        component: LedFan,
        layout: 0
    },
    {
        path: '/temperHumi',
        component: TemperHumi,
        layout: 0
    },
    {
        path: '/login',
        component: Login,
        layout: 1
    },
    {
        path: '/register',
        component: Register,
        layout: 1
    },
    {
        path: '/notification',
        component: Notification,
        layout: 0
    },
    {
        path: '/light',
        component: Light,
        layout: 0
    }

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };