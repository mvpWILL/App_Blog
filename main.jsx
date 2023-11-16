import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginContainer from './componentes/organismes/LoginContainer';
import BlogForm from './componentes/organismes/BlogForm';
import Historial from './pages/Historial';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer /> ,
  },
  
   {
    path:"/blogform",
    element: <BlogForm />
   },
  {
   path:"/historial",
   element: <Historial />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
