import React from 'react'
import Navbar from '../Navbar/Navbar'

import {Outlet} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet> <Toaster></Toaster></Outlet>
   
    </>
    
  )
}
