import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import Leaderboards from './pages/Leaderboards';
import GamePage from './pages/GamePage'
import LevelSelect from './pages/LevelSelect';
import gamedata from './assets/gamedata.json'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LevelSelect levelsList={gamedata.levels} />,
      },
      {
        path: "/leaderboards",
        element: <Leaderboards levelsList={gamedata.levels}/>,
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

