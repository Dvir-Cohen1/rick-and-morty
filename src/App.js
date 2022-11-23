import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404";
import IndexPage from "./pages/IndexPage";
import Characters from "./pages/Characters";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/allCharacters" element={<Characters />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
