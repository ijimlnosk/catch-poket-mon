import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainPage from "../../components/main/mainPage";
import SignupPage from "../../components/signup/signupPage";
import SigninPage from "../../components/signin/signinPage";
import MyInfoPage from "../../components/myInfo/myInfoPage";
import PoketMonDetailPage from "../../components/poketMonDetail/poketMonDetailPage";
import AdminRouter from "./adminRouter";

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
