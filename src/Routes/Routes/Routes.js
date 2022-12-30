import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyTask from "../../Pages/MyTask/MyTask";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addtask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/mytask',
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/completedtask',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            }
        ]
    }

])
export default router;