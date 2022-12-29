import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../layout/DashbordLayout";
import Main from "../layout/Main";
import Allproduct from "../pages/allProduct/Allproduct";
import Blog from "../pages/Blog/Blog";
// import Category from "../pages/allProduct/Allproduct";
import CheckOut from "../pages/CheckOut/CheckOut";
import Dashbord from "../pages/Dashbord/Dashbord";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";
import AllUsers from "../pages/Dashbord/AllUsers";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Productdetails from "../ProductsDetails/Productdetails";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AdminRoute from "../routes/AdminRoute/AdminRoute";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
         
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <ProtectedRoute><CheckOut></CheckOut></ProtectedRoute>
            },
            {
                path: '/allproduct/:id',
                element: <Allproduct></Allproduct>
            },
            {
                path: '/productdetails/:id',
                element: <Productdetails></Productdetails>
                // loader: ({params}) => fetch(`https://resale-backend.vercel.app/products/${params._id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashbord',
        // element:  <ProtectedRoute><DashbordLayout></DashbordLayout></ProtectedRoute>,
        element:  <ProtectedRoute><DashbordLayout></DashbordLayout></ProtectedRoute>,
        children: [
           {
            path:  '/dashbord',
            element: <Dashbord></Dashbord>,
           },
           {
            path: '/dashbord/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
        
        ]
    }
])

export default router;