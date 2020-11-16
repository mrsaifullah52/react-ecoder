import React from "react";
import Col from "react-bootstrap/Col";

function CountItem(props) {
  return (
    <>
      <Col md={4}>
        <h4>{props.title}</h4>
        <h3>{props.count}</h3>
      </Col>
    </>
  );
}

export default CountItem;
