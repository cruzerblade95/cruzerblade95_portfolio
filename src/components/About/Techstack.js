import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  {
    name: "Flutter",
    icon: SiFlutter,
  },
  {
    name: "Dart",
    icon: SiDart,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "PHP",
    icon: SiPhp,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Solidity",
    icon: SiSolidity,
  },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((technology) => {
        const Icon = technology.icon;

        return (
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            key={technology.name}
          >
            <Icon aria-label={technology.name} />

            <div className="tech-icons-text">
              {technology.name}
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;