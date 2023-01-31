import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Leaderboards from './components/Leaderboards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/leaderboards",
    element: <Leaderboards />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

