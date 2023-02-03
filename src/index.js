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
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnBLoenB15oBnkzMMcdKxBbyvq3ZB6BPU",
  authDomain: "character-finder-5efb0.firebaseapp.com",
  projectId: "character-finder-5efb0",
  storageBucket: "character-finder-5efb0.appspot.com",
  messagingSenderId: "68287017393",
  appId: "1:68287017393:web:de6842b3186fbb0ab20d90"
};

// Create a reference with an initial file path and name
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const pathReference = ref(storage, 'portraits/ArnoldShortman.webp');
console.log(pathReference)

// Initialize Firebase

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

