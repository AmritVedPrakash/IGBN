import { useLocation } from "react-router-dom";
import Router from "./Router";
import useLenis from "../hooks/useLenis";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import InteractiveCursor from "../components/common/InteractiveCursor";
import { ReaderCartProvider } from "../components/sections/home/GlobalPublishers/Readers/ReaderCartProvider";
export default function App() {
  useLenis();
  const { pathname } = useLocation();
  const isStandalonePortal = pathname === "/ai-coo" || pathname.startsWith("/publishers/author/") || pathname.startsWith("/publishers/readers");

  return (
    <>
    <InteractiveCursor />
      {!isStandalonePortal && <Navbar />}

      <ReaderCartProvider>
        <Router />
      </ReaderCartProvider>

      {!isStandalonePortal && <Footer />}
    </>
  );
}
