import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from './components/Page404'
import index from './pages/index'
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<index />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  )
}

export default App