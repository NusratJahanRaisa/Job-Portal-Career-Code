import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import SignIn from "../Pages/SignIn/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=>fetch('http://localhost:5000/jobs')
      },
      {
        path: "/register",
        Component: Registration
      },
      {
        path: "/login",
        Component: SignIn
      }
    ]
  },
  
]);

export default Router;