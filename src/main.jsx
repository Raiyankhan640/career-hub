import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import Jobs from './components/FeaturedJobs/Jobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path:'/jobs',
        element: <Jobs></Jobs>
      },
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
