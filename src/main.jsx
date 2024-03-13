import React from 'react'
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css'
import HomePage from './pages/HomePage'
import ProfilesPage from './pages/ProfilesPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:id",
        element: <ProfilePage />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
