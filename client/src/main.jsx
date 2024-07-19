import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const Main = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer
        position="bottom-left"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        bodyClassName="toastBody"
      />
    </QueryClientProvider>
  </Provider>
);

// Client-side rendering
if (typeof document !== "undefined") {
  ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
}

export default Main;
