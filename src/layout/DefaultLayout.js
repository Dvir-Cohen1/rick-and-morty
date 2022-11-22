import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Wrapper } from '../components/common/Wrapper'

function DefaultLayout({ children }) {
     return (
          <Wrapper >
               <Header />
               <div className="content">{children}</div>
               <Footer />
          </Wrapper >
     )
}

export default DefaultLayout