import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Global from "./styles/global";

import Header from "./components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Global />
    </BrowserRouter>
  );
}

export default RoutesApp;
