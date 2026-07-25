import React from "react";
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
import Reveal from "../Reveal";

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
    <div className="technology-grid">
      {technologies.map(
        (technology, index) => {
          const Icon = technology.icon;

          return (
            <Reveal
              className="technology-card"
              delay={(index % 8) * 45}
              key={technology.name}
            >
              <Icon aria-hidden="true" />

              <span>
                {technology.name}
              </span>
            </Reveal>
          );
        }
      )}
    </div>
  );
}

export default Techstack;