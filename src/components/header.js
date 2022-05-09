import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container>
        <Row>
          <Col sm="2" bg="dark">
            Hello
          </Col>
        </Row>

        <Row>
          <Col sm="2">Hello</Col>
        </Row>
      </Container>
    </>
  );
}
