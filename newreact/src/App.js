import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./pages/AboutPage";
import Cards from "./pages/CardsPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
