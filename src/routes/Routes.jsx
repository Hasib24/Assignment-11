import React, { useContext } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/home/Home';
import Error from '../pages/Error';
import AllToys from '../pages/alltoys/AllToys';
import MyToys from '../pages/mytoy/MyToys';
import AddAToy from '../pages/AddAToy';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Regestation from '../pages/Regestation';
import PrivateRoutes from './PrivateRoutes';
import UpdateMyToy from '../pages/mytoy/UpdateMyToy';
import ScrollToTop from '../hooks/ScrollToTop';
import ViewDetails from '../pages/home/ViewDetails';



const router = createBrowserRouter([
    {
      path: "/",
      element: <ScrollToTop><HomeLayout></HomeLayout></ScrollToTop>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/alltoys",
          element: <AllToys></AllToys>,
          loader: ()=>fetch('https://assignment-11-server-py32aysx2-hasib24.vercel.app/alltoys')
        },
        {
          path: "/mytoys",
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path: "/update/:id",
          element: <PrivateRoutes><UpdateMyToy></UpdateMyToy></PrivateRoutes>,
          loader: ({params})=>fetch(`https://assignment-11-server-py32aysx2-hasib24.vercel.app/update/${params.id}`)
          
        },
        {
          path: "/addatoy",
          element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path: "/viewdetails/:id",
          element: <ViewDetails></ViewDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/viewdetails/${params.id}`)

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