import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import Main from "../../layout/Main/Main";
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import AllFoodServices from "../../components/FoodServices/AllFoodServices";
import Food from "../../components/FoodAndReview/Food";
export const route= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/foodservices',
                element: <AllFoodServices></AllFoodServices>
            },
            {
                path: '/foodservice/:id',
                loader:({params})=>fetch(`http://localhost:5000/foodservice/${params.id}`),
                element: <Food></Food>
            }
        ]
    }
])