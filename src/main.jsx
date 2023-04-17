import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import SingUpForm from './components/SingUpForm';
import LogInForm from './components/LogInForm';
import UserProvider from './context/UserProvider';
import Dance from './components/Dance';
import PrivateRoute from './private/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'sing-up',
        element: <SingUpForm />
      },
      {
        path: 'log-in',
        element: <LogInForm />
      },
      {
        path: 'dance',
        element: <PrivateRoute><Dance /></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
  // </React.StrictMode>,
)
