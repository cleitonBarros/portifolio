import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container, Section } from "../components/Container/style";
import { Header } from "../components/Header";

import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Project";

export function AppRoutes() {
  return (
    <Router>
      <Header />

      <Container>
        <Section>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </Section>
      </Container>
    </Router>
  );
}