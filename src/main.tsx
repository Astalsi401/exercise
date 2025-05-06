import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "@/store";
import { App } from "./App.tsx";
import "virtual:stylex.css";

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}/`,
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
