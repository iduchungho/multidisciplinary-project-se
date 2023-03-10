/* Lưu đường dẫn chuyển trang */
import Dashboard from "../pages/Dashboard";
import Door from "../pages/Door";
import LedFan from "../pages/LedFan";
import TemperHumi from "../pages/TemperHumi";


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

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };