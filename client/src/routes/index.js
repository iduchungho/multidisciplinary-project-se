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
<<<<<<< HEAD
=======
    {
        path: '/login',
        component: Login,
        layout: 1
    },
    {
        path: '/register',
        component: Register,
        layout: 1
    }
>>>>>>> 60d2380132919a036b5423ea93f0994bf9536c2a

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };