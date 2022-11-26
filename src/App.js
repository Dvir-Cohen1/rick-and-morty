import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404";
import IndexPage from "./pages/IndexPage";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="Characters" element={<Characters />} />
          <Route path="Characters/:id" element={<Character />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
