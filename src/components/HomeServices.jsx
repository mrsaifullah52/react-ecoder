import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeServices(props) {
  return (
    <>
      <Col md={5} className="box bg-white mx-auto my-2 text-center p-3">
        <div className="img">
          <img src={props.imglink} alt={props.title} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.details}</p>
      </Col>
    </>
  );
}
export default HomeServices;
