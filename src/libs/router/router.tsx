import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../components/layouts/layout";
import Main from "../../page/main";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Main />,
            },
        ],
    },
]);

export default router;
