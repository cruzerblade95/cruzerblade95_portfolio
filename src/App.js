import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import ResumeNew from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <div
        className="App"
        id={load ? "no-scroll" : "scroll"}
      >
        <ScrollProgress />
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/project" element={<Projects />} />

          <Route
            path="/project/:slug"
            element={<ProjectDetail />}
          />

          <Route path="/resume" element={<ResumeNew />} />

          <Route
            path="/404"
            element={
              <main className="route-not-found-page">
                <div className="route-not-found-content">
                  <span>404</span>
                  <h1>Page not found</h1>
                  <p>
                    The page you are looking for does not exist.
                  </p>

                  <a href="/" className="project-primary-button">
                    Return home
                  </a>
                </div>
              </main>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;