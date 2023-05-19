import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import AllToys from '../pages/alltoys/AllToys';
import MyToys from '../pages/mytoy/MyToys';
import AddAToy from '../pages/AddAToy';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Regestation from '../pages/Regestation';
import PrivateRoutes from './PrivateRoutes';

// All Toys
// My Toys
// Add A Toy
// Blog
// Logi

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/alltoys",
          element: <AllToys></AllToys>,
          loader: ()=>fetch('http://localhost:5000/alltoys')
        },
        {
          path: "/mytoys",
          element: <MyToys></MyToys>
        },
        {
          path: "/addatoy",
          element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Regestation></Regestation>
        }
      ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

    


export default router;