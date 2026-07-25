import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux } from "react-icons/fa";
import { SiGithub, SiNginx, SiPostman } from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";

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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => {
        const Icon = tool.icon;

        return (
          <Col xs={4} md={2} className="tech-icons" key={tool.name}>
            <Icon aria-label={tool.name} />

            <div className="tech-icons-text">{tool.name}</div>
          </Col>
        );
      })}

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={vsCode}
          alt="Visual Studio Code"
          className="tech-icon-images"
        />

        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;