import Router from "./Router";
import useLenis from "../hooks/useLenis";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import InteractiveCursor from "../components/common/InteractiveCursor";
export default function App() {
  useLenis();
  return (
    <>
    <InteractiveCursor />
      <Navbar />

      <Router />

      <Footer />
    </>
  );
}
