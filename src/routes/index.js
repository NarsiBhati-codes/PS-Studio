import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Signup from "../form_s/Signup";
import Login from "../form_s/Login";

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
        path: "/signup",
        Component: Signup,
    },
    // {
    //     path: "/Home",
    //     Component: Home,
    // },
    // {
    //     path: "/Profile",
    //     Component: Profile,
    // },
    // {
    //     path: "/Portfolio",
    //     Component: Portfolio,
    // },
]);

export default routes