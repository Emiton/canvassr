import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateReport from './pages/CreateReport';
import ViewReport from './pages/ViewReport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/create-report",
    element: <CreateReport />
  },
  {
    path: "/report/:id",
    element: <ViewReport />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Canvassr.</h1>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
