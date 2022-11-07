import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";

export const route= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    }
])