import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/web/Login';
import { Forgot_password } from './pages/web/Forgot_password';
import { Createnew } from './pages/web/Createnew';
import { Home } from '../src/pages/web/Home';
import { Saveinfo } from './pages/web/Saveinfo';
import { InstaStoryslider } from './common/web/InstaStoryslider';
import {Profile_section} from './pages/web/Profile_section';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routes = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },

  {
    path:'/forgot_password',
    element:<Forgot_password/>
  },

  {
    path:"/createnew",
    element:<Createnew/>
  },

  {
    path:"/saveinfo",
    element:<Saveinfo/>
  },

  {
    path:"/home",
    element:<Home/>
  },

  {
    path:"/profile user",
    element:<Profile_section/>
  },

  //common routes

  {
    path:"/story",
    element:<InstaStoryslider/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
