import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Header } from "../components/Header";

export function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
