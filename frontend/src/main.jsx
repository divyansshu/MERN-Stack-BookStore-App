import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import CreateBook from "./components/CreateBook";
import ShowBook from "./components/ShowBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import ErrorPage from "./components/ErrorPage";
import {SnackbarProvider} from "notistack"

const router = createBrowserRouter([
  {
    path: "/",
     errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/books/create",
     errorElement: <ErrorPage />,
    element: <CreateBook />,
  },
  {
    path: "/books/details/:id",
     errorElement: <ErrorPage />,
    element: <ShowBook />,
  },
  {
    path: "/books/edit/:id",
     errorElement: <ErrorPage />,
    element: <EditBook />,
  },
  {
    path: "/books/delete/:id",
     errorElement: <ErrorPage />,
    element: <DeleteBook />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
    <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
