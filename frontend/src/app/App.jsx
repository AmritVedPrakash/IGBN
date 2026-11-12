import { useLocation } from "react-router-dom";
import Router from "./Router";
import useLenis from "../hooks/useLenis";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import InteractiveCursor from "../components/common/InteractiveCursor";
export default function App() {
  useLenis();
  const { pathname } = useLocation();
  const isAuthorPortal = pathname.startsWith("/publishers/author/");
  return (
    <>
    <InteractiveCursor />
      {!isAuthorPortal && <Navbar />}

      <Router />

      {!isAuthorPortal && <Footer />}
    </>
  );
}
