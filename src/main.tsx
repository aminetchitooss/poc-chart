import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './routes/error-page';
import RechartsExample from './routes/RechartsExample/RechartsExample';
import './index.scss';
import ChartJsExample from './routes/ChartJsExample/ChartJsExample';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/recharts',
        element: <RechartsExample />
      },
      {
        path: '/chartjs',
        element: <ChartJsExample />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
