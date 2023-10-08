import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";



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
            }
        ]

    }
]);
export default router;