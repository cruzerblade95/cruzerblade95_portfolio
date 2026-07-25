import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`${props.title} project`}
        />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.technologies && (
          <div className="project-tech-list">
            {props.technologies.map((technology) => (
              <span className="project-tech-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="project-buttons">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp;
              GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{
                marginLeft: props.ghLink ? "10px" : "0",
              }}
            >
              <CgWebsite /> &nbsp;
              {props.demoLabel || "Live"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;