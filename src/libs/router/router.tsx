import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../components/layouts/layout";
import MainPage from "../../page/mainPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
        ],
    },
]);

export default router;
