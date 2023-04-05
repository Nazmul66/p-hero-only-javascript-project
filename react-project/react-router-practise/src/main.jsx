import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Price from './Component/Price/Price';
import DataLoadDetails from './Component/DataLoadDetails/DataLoadDetails';
import Data from './Component/Data/Data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Price></Price>,
      },
      {
        path: '/contact',
        element: <Contact />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/dataLoad',
        element : <Data></Data>
      },
      {
        path: '/dataLoadDetails/:dataLoadDetailsId',
        element: <DataLoadDetails></DataLoadDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.dataLoadDetailsId}`)
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
