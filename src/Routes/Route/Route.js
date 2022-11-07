import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import Main from "../../layout/Main/Main";

export const route= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
])