import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Helmet from "./components/Helmet";

import { LandingPage } from "./pages/Home";

export default function App() {
  return (
    <>
      <Helmet />
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}
