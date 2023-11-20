import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Login from '../pages/auth/Login';
import Register from "../pages/auth/Register";
import Home from "../afterLogin/Home";
import Profile from "../afterLogin/Profile";
import Portfolio from "../afterLogin/portfolios/Portfilio1/Portfolio";

export const routes = createBrowserRouter ([
    {
        path: "/",
        Component: App,
        ErrorBoundary: ErrorPage,
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path: "/Home",
        Component: Home,
    },
    {
        path: "/Profile",
        Component: Profile,
    },
    {
        path: "/Portfolio",
        Component: Portfolio,
    },
]);

export default routes