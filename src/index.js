import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import Leaderboards from './pages/Leaderboards';
import GamePage from './pages/GamePage'
import LevelSelectCard from './components/LevelSelectCard';
import { levelList } from './assets/levelList'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LevelSelectCard levelsList={levelList} />,
      },
      {
        path: "/leaderboards",
        element: <Leaderboards />,
      },
      {
        path: "/game/:level",
        element: <GamePage />,
      },
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

