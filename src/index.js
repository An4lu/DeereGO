import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './routes/App';
import { Home } from './routes/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/home",
    element: <Home/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

