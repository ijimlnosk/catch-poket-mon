import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./libs/router/router";
import { store } from "./libs/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="font-DungGeunMo">
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <RouterProvider router={router}></RouterProvider>
                </Provider>
            </QueryClientProvider>
        </div>
    );
}

export default App;
