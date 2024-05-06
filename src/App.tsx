import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./libs/router/router";
import { store } from "./libs/redux/store";

function App() {
    return (
        <div className="font-DungGeunMo">
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </div>
    );
}

export default App;
