import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import Main from "../../layout/Main/Main";
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import AllFoodServices from "../../components/FoodServices/AllFoodServices";
import FoodAndReview from "../../components/FoodAndReview/FoodAndReview";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";
import MyReview from "../../components/MyReview/MyReview";
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
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/foodservice/:id',
                loader:({params})=>fetch(`http://localhost:5000/foodservices/${params.id}`),
                element: <FoodAndReview></FoodAndReview>
            }
        ]
    }
])