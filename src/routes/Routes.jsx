import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import AddAToy from '../pages/AddAToy';
import Blog from '../pages/Blog';
import Login from '../pages/Login';

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
          element: <AllToys></AllToys>
        },
        {
          path: "/mytoys",
          element: <MyToys></MyToys>
        },
        {
          path: "/addatoy",
          element: <AddAToy></AddAToy>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

    


export default router;