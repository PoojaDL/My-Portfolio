import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Preloader = React.lazy(() => import("../src/components/Pre"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Footer = React.lazy(() => import("./components/Footer"));
const Resume = React.lazy(() => import("./components/Resume/ResumeNew"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <Preloader load={load} />
        </Suspense>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Suspense fallback={<div>Loading</div>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <ScrollToTop />
          </Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/project"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/resume"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Resume onLoadSuccess={removeTextLayerOffset} />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Navigate to="/" />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
