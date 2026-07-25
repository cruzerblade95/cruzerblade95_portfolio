import React from "react";
import { Container } from "react-bootstrap";
import {
  BsAward,
  BsCheck2Circle,
  BsCompass,
  BsPeople,
} from "react-icons/bs";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const experience = [
  {
    period: "Jan 2025 — Jun 2026",
    role: "Senior Software Engineer",
    company: "Megah Fintech Sdn. Bhd.",
    description:
      "Led fintech feature development, designed secure payment APIs, integrated blockchain workflows, and contributed to architecture planning and code reviews.",
    skills: [
      "Fintech",
      "REST APIs",
      "Blockchain",
      "Architecture",
    ],
  },
  {
    period: "Feb 2023 — Dec 2024",
    role: "Software Engineer",
    company: "MyRich Dynasty Networks Sdn. Bhd.",
    description:
      "Built Laravel enterprise systems and Flutter apps, improved existing products, and contributed to a React SPA delivered through AWS Amplify and GitHub CI/CD.",
    skills: [
      "Flutter",
      "Laravel",
      "React",
      "AWS",
    ],
  },
  {
    period: "Mar 2022 — Sep 2022",
    role: "Full-Stack Developer",
    company: "AdEasy",
    description:
      "Translated business requirements into tested website improvements while collaborating through sprint planning and iterative delivery.",
    skills: [
      "Full-stack",
      "Agile",
      "Testing",
      "Delivery",
    ],
  },
  {
    period: "Dec 2020 — Feb 2022",
    role: "Programmer",
    company: "PocketData (M) Sdn. Bhd.",
    description:
      "Developed and maintained application features in a Scrum team, turning user requirements into reliable and tested software solutions.",
    skills: [
      "Scrum",
      "Development",
      "Testing",
      "Collaboration",
    ],
  },
];

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    category: "Cloud",
  },
  {
    title:
      "End User Computing on AWS — Advanced Topics",
    category: "Cloud",
  },
  {
    title: "CCNA Routing and Switching",
    category: "Networking",
  },
  {
    title: "Designing RESTful APIs",
    category: "Backend",
  },
  {
    title: "Flutter Essential Training",
    category: "Mobile",
  },
  {
    title: "Database Design Fundamentals",
    category: "Database",
  },
];

const principles = [
  {
    icon: BsCompass,
    title: "Product thinking",
    text:
      "I connect technical choices to business outcomes and user needs.",
  },
  {
    icon: BsCheck2Circle,
    title: "Production quality",
    text:
      "I value secure architecture, readable code, testing, and reliability.",
  },
  {
    icon: BsPeople,
    title: "Clear collaboration",
    text:
      "I communicate trade-offs and work effectively across product teams.",
  },
];

function About() {
  return (
    <main className="page">
      <section className="page-hero">
        <Particle />

        <Container>
          <Reveal>
            <span className="eyebrow">
              About me
            </span>

            <h1>
              A software engineer focused on
              <span className="gradient-text">
                {" "}
                meaningful outcomes.
              </span>
            </h1>

            <p>
              I combine full-stack, mobile, cloud,
              fintech, Web3, and AI experience to build
              products that are useful, maintainable,
              and ready for real users.
            </p>
          </Reveal>

          <Reveal
            className="about-stat-row"
            delay={140}
          >
            <div>
              <strong>5+</strong>
              <span>Years of experience</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Professional roles</span>
            </div>

            <div>
              <strong>Full cycle</strong>
              <span>Idea to deployment</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="about-story-grid">
            <Reveal className="about-story">
              <span className="eyebrow">
                My approach
              </span>

              <h2>
                Technology should make difficult work
                feel simple.
              </h2>

              <p>
                I started my career building and
                maintaining business software, then
                expanded into mobile products, fintech
                platforms, blockchain integrations,
                AWS delivery, and AI tooling.
              </p>

              <p>
                That range helps me look beyond
                individual screens or endpoints. I
                consider the complete system: user
                experience, data flow, security,
                deployment, monitoring, and long-term
                maintainability.
              </p>
            </Reveal>

            <div className="principles-grid">
              {principles.map(
                (principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <Reveal
                      className="principle-card"
                      delay={index * 90}
                      direction="right"
                      key={principle.title}
                    >
                      <Icon />

                      <div>
                        <h3>{principle.title}</h3>
                        <p>{principle.text}</p>
                      </div>
                    </Reveal>
                  );
                }
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="section section-muted">
        <Container>
          <Reveal className="section-heading">
            <span className="eyebrow">
              Technical toolkit
            </span>

            <h2>
              Technologies I use to
              <span className="gradient-text">
                {" "}
                deliver products.
              </span>
            </h2>
          </Reveal>

          <Techstack />

          <Reveal className="tool-heading">
            <h3>
              Development and delivery tools
            </h3>
          </Reveal>

          <Toolstack />
        </Container>
      </section>

      <section className="section">
        <Container>
          <Reveal className="section-heading">
            <span className="eyebrow">
              Career journey
            </span>

            <h2>
              Experience built through real delivery.
            </h2>
          </Reveal>

          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal
                className="timeline-item"
                delay={index * 80}
                key={`${item.company}-${item.role}`}
              >
                <div className="timeline-marker">
                  <span />
                </div>

                <div className="timeline-period">
                  {item.period}
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <span>{item.company}</span>
                    </div>

                    <span className="timeline-index">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  <p>{item.description}</p>

                  <div className="tag-list">
                    {item.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-muted">
        <Container>
          <Reveal className="section-heading">
            <span className="eyebrow">
              Continuous learning
            </span>

            <h2>
              Certifications that strengthen my
              foundations.
            </h2>
          </Reveal>

          <div className="certification-grid">
            {certifications.map(
              (certification, index) => (
                <Reveal
                  className="certification-card"
                  delay={index * 60}
                  key={certification.title}
                >
                  <div className="certification-icon">
                    <BsAward />
                  </div>

                  <span>
                    {certification.category}
                  </span>

                  <h3>
                    {certification.title}
                  </h3>
                </Reveal>
              )
            )}
          </div>

          <Github />
        </Container>
      </section>
    </main>
  );
}

export default About;