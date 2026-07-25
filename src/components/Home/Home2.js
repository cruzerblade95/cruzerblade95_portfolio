import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsBoxes,
  BsCodeSlash,
  BsCpu,
  BsPhone,
} from "react-icons/bs";
import Reveal from "../Reveal";

const capabilities = [
  {
    icon: BsCodeSlash,
    number: "01",
    title: "Full-stack engineering",
    description:
      "Scalable React and Laravel products backed by well-structured APIs, authentication, and reliable databases.",
    tags: [
      "React",
      "Laravel",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    icon: BsPhone,
    number: "02",
    title: "Mobile product delivery",
    description:
      "Cross-platform Flutter applications designed, integrated, tested, and maintained through app-store releases.",
    tags: [
      "Flutter",
      "Dart",
      "Firebase",
      "App Stores",
    ],
  },
  {
    icon: BsCpu,
    number: "03",
    title: "AI and automation",
    description:
      "Practical AI features and developer tooling built with provider APIs, AWS Bedrock, and production safeguards.",
    tags: [
      "AI SDKs",
      "Bedrock",
      "OpenAI",
      "Anthropic",
    ],
  },
  {
    icon: BsBoxes,
    number: "04",
    title: "Cloud and Web3 systems",
    description:
      "Cloud deployments, fintech workflows, wallet integrations, and blockchain-connected product experiences.",
    tags: [
      "AWS",
      "Linux",
      "Fintech",
      "Web3",
    ],
  },
];

function Home2() {
  return (
    <section
      className="section section-muted"
      id="home-about"
    >
      <Container>
        <Reveal className="section-heading">
          <span className="eyebrow">
            What I bring
          </span>

          <h2>
            Engineering across the
            <span className="gradient-text">
              {" "}
              complete product lifecycle.
            </span>
          </h2>

          <p>
            I translate business problems into secure,
            maintainable products and stay involved from the
            first technical decision through deployment and
            continuous improvement.
          </p>
        </Reveal>

        <div className="capability-grid">
          {capabilities.map(
            (capability, index) => {
              const Icon = capability.icon;

              return (
                <Reveal
                  className="capability-card"
                  delay={index * 80}
                  key={capability.title}
                >
                  <div className="capability-card-top">
                    <div className="capability-icon">
                      <Icon />
                    </div>

                    <span className="capability-number">
                      {capability.number}
                    </span>
                  </div>

                  <h3>{capability.title}</h3>

                  <p>{capability.description}</p>

                  <div className="tag-list">
                    {capability.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            }
          )}
        </div>

        <Reveal className="home-cta">
          <div>
            <span className="eyebrow">
              Selected work
            </span>

            <h2>
              See how I turn complex requirements
              into working products.
            </h2>
          </div>

          <Link
            className="button button-light"
            to="/project"
          >
            View case studies
            <BsArrowRight />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export default Home2;