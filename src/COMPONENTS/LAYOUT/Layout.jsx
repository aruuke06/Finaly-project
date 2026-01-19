import React from 'react'
import Header from '../HEADER/Header'
import Footer from '../FOOTER/Footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default layout
