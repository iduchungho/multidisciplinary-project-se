import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import DefaultLayout from './components/layouts/DefaultLayout';
import LoginLayout from './components/layouts/LoginLayout';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Content = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout === 1) Layout = LoginLayout
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Content />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
