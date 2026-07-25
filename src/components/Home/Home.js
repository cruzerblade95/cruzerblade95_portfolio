import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsArrowDown,
  BsArrowUpRight,
  BsBriefcase,
  BsCloud,
  BsCodeSlash,
  BsPhone,
} from "react-icons/bs";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Home2 from "./Home2";
import Type from "./Type";

const highlights = [
  {
    icon: BsCodeSlash,
    value: "5+",
    label: "Years building software",
  },
  {
    icon: BsPhone,
    value: "2",
    label: "Major app stores shipped",
  },
  {
    icon: BsCloud,
    value: "AWS",
    label: "Cloud delivery experience",
  },
  {
    icon: BsBriefcase,
    value: "6",
    label: "Featured case studies",
  },
];

function Home() {
  return (
    <main>
      <section className="hero-section" id="home">
        <Particle />

        <div
          className="hero-orb hero-orb-one"
          aria-hidden="true"
        />

        <div
          className="hero-orb hero-orb-two"
          aria-hidden="true"
        />

        <div
          className="hero-grid"
          aria-hidden="true"
        />

        <Container className="hero-container">
          <div className="hero-layout">
            <div className="hero-copy">
              <Reveal>
                <div className="availability-pill">
                  <span className="availability-dot" />

                  Open to software engineering opportunities
                </div>
              </Reveal>

              <Reveal delay={90}>
                <p className="hero-kicker">
                  Hello, I&apos;m Nabil Ajwad.
                </p>

                <h1 className="hero-title">
                  I build software that

                  <span className="gradient-text">
                    {" "}
                    moves businesses forward.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={170}>
                <div className="hero-role">
                  <Type />
                </div>

                <p className="hero-summary">
                  Senior Software Engineer creating dependable AI,
                  web, mobile, fintech, cloud, and Web3
                  products—from architecture to production.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="hero-actions">
                  <Link
                    className="button button-primary"
                    to="/project"
                  >
                    Explore my work
                    <BsArrowUpRight />
                  </Link>

                  <Link
                    className="button button-secondary"
                    to="/resume"
                  >
                    View résumé
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="hero-stack">
                  <span>Core stack</span>

                  <div className="hero-stack-list">
                    {[
                      "Flutter",
                      "Laravel",
                      "React",
                      "TypeScript",
                      "AWS",
                    ].map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal
              className="hero-visual-wrap"
              direction="right"
              delay={120}
            >
              <div className="hero-visual">
                <div className="code-window">
                  <div className="code-window-bar">
                    <div className="window-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span>nabil.profile.ts</span>
                  </div>

                  <div
                    className="code-content"
                    aria-label="Developer profile"
                  >
                    <p>
                      <span className="code-purple">
                        const
                      </span>{" "}
                      <span className="code-blue">
                        engineer
                      </span>{" "}
                      = {"{"}
                    </p>

                    <p className="code-indent">
                      name:{" "}
                      <span className="code-green">
                        &quot;Nabil&quot;
                      </span>
                      ,
                    </p>

                    <p className="code-indent">
                      focus:{" "}
                      <span className="code-green">
                        &quot;Useful products&quot;
                      </span>
                      ,
                    </p>

                    <p className="code-indent">
                      ships: [
                      <span className="code-green">
                        &quot;Web&quot;, &quot;Mobile&quot;,
                        &quot;AI&quot;
                      </span>
                      ],
                    </p>

                    <p className="code-indent">
                      mindset:{" "}
                      <span className="code-green">
                        &quot;Build. Measure. Improve.&quot;
                      </span>
                    </p>

                    <p>{"};"}</p>
                  </div>
                </div>

                <div className="floating-card floating-card-top">
                  <span className="floating-card-icon">
                    AI
                  </span>

                  <div>
                    <strong>AI SDK</strong>
                    <span>Published on npm</span>
                  </div>
                </div>

                <div className="floating-card floating-card-bottom">
                  <span className="floating-status-dot" />

                  <div>
                    <strong>Production ready</strong>
                    <span>Web · Mobile · Cloud</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal
            className="hero-metrics"
            delay={380}
          >
            {highlights.map(
              ({
                icon: Icon,
                value,
                label,
              }) => (
                <div
                  className="metric-item"
                  key={label}
                >
                  <Icon />

                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              )
            )}
          </Reveal>

          <a
            className="scroll-cue"
            href="#home-about"
            aria-label="Scroll down"
          >
            <span>Scroll to explore</span>
            <BsArrowDown />
          </a>
        </Container>
      </section>

      <Home2 />
    </main>
  );
}

export default Home;