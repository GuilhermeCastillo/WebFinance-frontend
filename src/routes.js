import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";

import Header from "./components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
