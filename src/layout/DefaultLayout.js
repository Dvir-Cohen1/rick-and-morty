import React from 'react'
import Header from './Header'
import Footer from './Footer'
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