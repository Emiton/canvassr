import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import CreateReport from './pages/CreateReport';
import Dashboard from './pages/Dashboard';
import SearchReports from './pages/SearchReports';
import ViewReport from './pages/ViewReport';
import GlobalStyle from './globalStyles';

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
  {
    path: "/search",
    element: <SearchReports />
  },
]);

const AppWrapper = styled.div`
  margin: 16px;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper>
      <h1>Canvassr.</h1>
      <RouterProvider router={router} />
      <GlobalStyle />
    </AppWrapper>
  </React.StrictMode>
);

