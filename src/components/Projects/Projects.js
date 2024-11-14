import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio Website"
              description="Green Ad Portfolio might imply that you're thinking about environmentally friendly advertising campaigns. In this context, AI could be used to personalize email marketing campaigns and focus on environmental issues."
              ghLink="https://github.com/iamdeepakverma/green-ad-du"
              demoLink="https://iamdeepakverma.github.io/green-ad-du/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Art India"
              description="At Artndia, we bring your fashion dreams to life. Our talented founder, Aarthi Rao, transforms imaginative ideas into stunning attire by blending traditional hand painting with the latest trends. Let us turn your vision into wearable art, seamlessly merging creativity and style"
              ghLink="https://github.com/iamdeepakverma/art-india-Du"
              demoLink="https://iamdeepakverma.github.io/art-india-Du/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Audio to Text"
              description="This website is one of the most unique platforms where you can accomplish various tasks, such as having text written in your preferred language, regardless of your native tongue. You can also easily copy the generated text. Additionally, a distinctive feature allows you to create text by simply uploading your audio."
              ghLink="https://github.com/iamdeepakverma/dv-audio-to-text"
              demoLink="https://dv-audio-to-text.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Todo list "
              description="Todo List is your ultimate productivity companion. This intuitive web application helps you stay organized and on top of your tasks. Whether you're a student, professional, or simply someone who wants to streamline their daily life, Todo Listr offers a user-friendly interface to effectively manage your to-do lists."
              ghLink="https://github.com/iamdeepakverma/dv-todo-list-app"
              demoLink="https://dv-todo-list-web-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai Calculator"
              description="CalcMaster is your go-to online calculator for all your mathematical needs. Whether you're a student, professional, or simply looking for a quick calculation, our user-friendly interface makes it easy to perform a wide range of calculations."
              ghLink="https://github.com/iamdeepakverma/dv-calculator"
              demoLink="https://dv-calculator.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Gemini-like Chat"
              description="Gemini AI is a powerful artificial intelligence tool designed to assist you with a variety of tasks. From answering your questions to providing summaries of complex topics, Gemini AI is here to help."
               ghLink="https://github.com/iamdeepakverma/Gemini-Ai"
              demoLink="https://dv-chat-ai.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
