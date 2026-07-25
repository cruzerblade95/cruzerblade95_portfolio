import React from "react";
import { FaLinux } from "react-icons/fa";
import {
  SiGithub,
  SiNginx,
  SiPostman,
} from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Reveal from "../Reveal";

const tools = [
  {
    name: "Linux",
    icon: FaLinux,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Nginx",
    icon: SiNginx,
  },
];

function Toolstack() {
  return (
    <div className="tool-grid">
      {tools.map((tool, index) => {
        const Icon = tool.icon;

        return (
          <Reveal
            className="tool-card"
            delay={index * 60}
            key={tool.name}
          >
            <Icon aria-hidden="true" />
            <span>{tool.name}</span>
          </Reveal>
        );
      })}

      <Reveal
        className="tool-card"
        delay={tools.length * 60}
      >
        <img
          src={vsCode}
          alt=""
          aria-hidden="true"
        />

        <span>VS Code</span>
      </Reveal>
    </div>
  );
}

export default Toolstack;