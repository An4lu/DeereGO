import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './routes/App';
import { Perfil } from './routes/Perfil';
import './index.css';
import { Entregas } from './routes/Entregas';
import { Ajustes } from './routes/Ajustes';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/Perfil",
    element: <Perfil/>,
  },
  {
    path:"/Entregas",
    element: <Entregas/>,
  },
  {
    path:"/Ajustes",
    element: <Ajustes/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

