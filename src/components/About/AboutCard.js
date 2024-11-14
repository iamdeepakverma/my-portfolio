import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepak Verma </span>
            from <span className="purple"> Indore, India. </span>
             Recently graduated with a degree in B.Com Computer and a good knowledge of frontend and backend development . I'm good at using HTML, CSS,Node Js, Express Js, MongoDB, React, Postgres and JavaScript and I always keep up with the newest trends in the industry. A quick learner with excellent problem-solving abilities and a collaborative mindset. Looking forward to starting my career in making websites look awesome, bringing new ideas and lots of excitement to create cool experiences.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Deepak Verma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
