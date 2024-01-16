import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import employeesRouter from './features/Employees/employeesRouter.tsx';
import departmentsRouter from './features/Departments/departmentsRouter.tsx';
import homeRouter from './features/HomePage/homeRouter.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';

const router = createBrowserRouter([
  {
    children: [
      ...employeesRouter,
      ...departmentsRouter,
      ...homeRouter
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
