import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404";
import IndexPage from "./pages/IndexPage";
import AllCharacters from "./pages/AllCharacters";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/allCharacters" element={<AllCharacters />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
