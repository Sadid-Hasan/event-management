import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";




const router = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Service',
                element: <Service></Service>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            }
        ]

    }
]);
export default router;