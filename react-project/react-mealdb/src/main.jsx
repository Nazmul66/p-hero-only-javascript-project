import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Components/Body/Body';
import FoodDetails from './Components/FoodDetails/FoodDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      },
      {
        path: '/details/:detailsId',
        element: <FoodDetails />,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.detailsId}`)
      },
      {
        path: '/meal',
        element: <div className="text-black">coming soon2</div>
      },
      {
        path: '/about',
        element: <div className="text-black">coming soon</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
