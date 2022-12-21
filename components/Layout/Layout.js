import React from 'react'
import Footer from '../Include/Footer'
import Header from '../Include/Header'

const layout = ({children}) => {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}

export default layout