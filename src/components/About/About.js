import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Img from "../../Assets/21_PICTURE.jpeg";
import { DiBingSmall } from "react-icons/di";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            
            className="about-img circular-image"
          >
            <img src={Img} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <h2 style={{fontSize:"medium"}} className="purple" >tech I'm familiar with </h2>

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
