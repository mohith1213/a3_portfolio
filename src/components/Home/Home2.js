import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { Link } from "react-router-dom";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaCode, FaHackerrank, FaLinkedinIn } from "react-icons/fa";
import { alignPropType } from "react-bootstrap/esm/types";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          
         
              <img src={myImg} className="img-f" alt="avatar" />
              <br/>
              <h1>about<span className="purple"> <a href="./about"> me</a></span></h1> 
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohith1213"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/mohith-krishna-reddy-gaddam-4ab648235"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  className="icon-colour home-social-icons"
                >
                  <FaHackerrank />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
