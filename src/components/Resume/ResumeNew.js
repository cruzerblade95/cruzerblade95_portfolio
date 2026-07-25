import React, {
  useEffect,
  useState,
} from "react";
import { Container } from "react-bootstrap";
import {
  BsArrowUpRight,
  BsCheck2Circle,
  BsDownload,
  BsFileEarmarkText,
} from "react-icons/bs";
import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Nabil Ajwad Updated Resume.pdf";
import Particle from "../Particle";
import Reveal from "../Reveal";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/` +
  `${pdfjs.version}/pdf.worker.min.js`;

const resumeHighlights = [
  "5+ years of software engineering experience",
  "Web, mobile, cloud, fintech, AI, and Web3 delivery",
  "Flutter apps released on Google Play and the Apple App Store",
  "Full product lifecycle from architecture to production",
];

function ResumeNew() {
  const [viewportWidth, setViewportWidth] =
    useState(window.innerWidth);

  const [pageCount, setPageCount] =
    useState(0);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  const pdfWidth = Math.min(
    820,
    Math.max(290, viewportWidth - 48)
  );

  return (
    <main className="page">
      <section className="page-hero resume-hero">
        <Particle />

        <Container>
          <div className="resume-hero-layout">
            <Reveal>
              <span className="eyebrow">
                Professional résumé
              </span>

              <h1>
                Experience designed to
                <span className="gradient-text">
                  {" "}
                  deliver impact.
                </span>
              </h1>

              <p>
                A concise overview of my software
                engineering experience, technical
                capabilities, education, and
                professional learning.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download résumé
                  <BsDownload />
                </a>

                <a
                  className="button button-secondary"
                  href="mailto:nabilajwad10@gmail.com"
                >
                  Contact me
                  <BsArrowUpRight />
                </a>
              </div>
            </Reveal>

            <Reveal
              className="resume-summary-card"
              direction="right"
              delay={120}
            >
              <div className="resume-summary-icon">
                <BsFileEarmarkText />
              </div>

              <span>At a glance</span>

              <ul>
                {resumeHighlights.map(
                  (highlight) => (
                    <li key={highlight}>
                      <BsCheck2Circle />
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section resume-document-section">
        <Container>
          <Reveal className="resume-document-heading">
            <div>
              <span className="eyebrow">
                Document preview
              </span>

              <h2>
                Full professional profile
              </h2>
            </div>

            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
              <BsArrowUpRight />
            </a>
          </Reveal>

          <Reveal className="resume-document">
            <Document
              file={pdf}
              loading={
                <div className="pdf-status">
                  Loading résumé…
                </div>
              }
              error={
                <div className="pdf-status">
                  The preview could not load. Use
                  the download button above.
                </div>
              }
              onLoadSuccess={({ numPages }) => {
                setPageCount(numPages);
              }}
            >
              {Array.from(
                { length: pageCount },
                (_, index) => (
                  <Page
                    pageNumber={index + 1}
                    width={pdfWidth}
                    renderTextLayer={false}
                    key={`resume-page-${index + 1}`}
                  />
                )
              )}
            </Document>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

export default ResumeNew;