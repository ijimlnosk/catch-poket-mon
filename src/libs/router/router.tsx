import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainPage from "../../pages/mainPage";
import MyInfoPage from "../../pages/myInfoPage";
import PoketMonDetailPage from "../../pages/poketMonDetailPage";
import AdminRouter from "./adminRouter";
import SigninPage from "../../pages/signinPage";
import SignupPage from "../../pages/signupPage";

const ADMIN_ROUTER: RouteObject = {
    element: <AdminRouter />,
    children: [
        {
            path: "",
            element: <MainPage />,
        },
        {
            path: "/myInfo",
            element: <MyInfoPage />,
        },
        {
            path: "/poketMonDetail",
            element: <PoketMonDetailPage />,
        },
    ],
};

const PUBLIC_ROUTER: RouteObject[] = [
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/signin",
        element: <SigninPage />,
    },
];

const router = createBrowserRouter([
    {
        children: [...PUBLIC_ROUTER, ADMIN_ROUTER],
    },
]);

export default router;
