import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> gaddam mohith krishna reddy </span>
            from <span className="purple"> Nellore, Andhra pradesh, India.</span>&nbsp;
            I am a pursuing my B.Tech in VIT-AP in the stream of Computer Science and Engineering with specilaization in <span className="purple"> cyber security </span>
            <br />
            <br />
            I like ethical hacking and web development.
            <br />
            <br />
            To say about my hobbies, <br/> I like to watch movies, tv shows, anime and I read eastern comics and novels. I play games now and then.
          </p>
      
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
