import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layout/HomeLayout.jsx';
import About from './Layout/About.jsx';
import Experience from './Layout/Experience.jsx';
import Skills from './Layout/Skills.jsx';
import Education from './Layout/Education.jsx';
import Projects from './Layout/Projects.jsx';
import Contact from './Layout/Contact.jsx';
import ProjectDetails from './Layout/ProjectsDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path:'/about',
    element: <About></About>
  },
  {
    path:'/experience',
    element:<Experience></Experience>
  },
  {
    path:'/skills',
    element:<Skills></Skills>
  },
  {
    path:'/education',
    element:<Education></Education>
  },
  {
    path:'/projects',
    element:<Projects></Projects>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/project-details',
    element:<ProjectDetails></ProjectDetails>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
