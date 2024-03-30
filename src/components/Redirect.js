import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home';
import Errorcom from '../components/Errorcom';
import About from '../components/About';
import ContactDetails from '../components/ContactDetails';
import Crops from "./Crops";
import Produce from "./Produce";
import Supporting from "./Supporting";
import Environment from "./Environment";
import Experimental from "./Experiment";

const Router = createBrowserRouter([
    {
     path : '/',
     element : <Home/>,
     errorElement : <Errorcom/>
    }, 
    {
      path : '/about',
      element : <About/>
     }, 
     {
      path: '/appologies',
      element : <Experimental/>
     },
     {
       path : '/produce',
       element : <Produce/>
      },
      {
        path : '/supporting_farmers',
        element : <Supporting/>
      },
     {
      path : '/produce/crops',
      element : <Crops/>
     },
     {
      path : '/our_impact',
      element : <Environment/>
     },
     {
      path : '/contact_us',
      element : <ContactDetails/>
     },
  ])

  export default Router;