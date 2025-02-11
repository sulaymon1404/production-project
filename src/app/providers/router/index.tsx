import Layout from "app/App";
import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "shared/config/routes";


export const router = createBrowserRouter([
    {
        element:<Layout/>,
        path:AppRoutes.MAIN,
        children:[
            {
                element:<MainPage/>,
                index:true
            },
            {
                element:<AboutPage/>,
                path:AppRoutes.ABOUT
            }
        ]
    }
])