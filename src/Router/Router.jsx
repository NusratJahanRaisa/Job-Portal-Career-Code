import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoute from "../Routes/PrivateRoute";

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
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
        // loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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