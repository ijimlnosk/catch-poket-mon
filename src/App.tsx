import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./libs/router/router";

function App() {
    return (
        <div className="font-DungGeunMo">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
