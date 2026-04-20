import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HalamanHome from "../pages/Home";
import AssetsPage from "../pages/AssetPage";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    }
    ,
    {
        path: '/login',
        element: <LoginPage />
    }
    ,{
        path: '/',
        element: (<HalamanHome />)
    }
    ,{
        path: '/asset',
        element: <AssetsPage />
    }
    ,

])