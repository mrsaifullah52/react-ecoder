import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeServices from "../components/HomeServices";
import CountItem from "../components/CountItem";

import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

function Home() {
  return (
    <>
      <Container fluid className="p-0">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://ecodercommunications.com/wp-content/uploads/2020/05/call-center-banner-png.jpg"
              alt="call-center-banner"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://ecodercommunications.com/wp-content/uploads/2020/03/Office-Pic.jpg"
              alt="Office-Pic"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://ecodercommunications.com/wp-content/uploads/2020/03/1-844.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="my-5">
        <Row className="home-about-us">
          <Col className="p-3" md={6}>
            <h1>Want To Know About Us</h1>
            <p>
              Ecoder Communications BPO is committed to provide our esteemed
              customers with one stop solutions, with highly motivated
              professional In Ecoder Communications the Human Capital along with
              a mix of latest technology to get maximum output within the
              available capacity. We are dedicated to working with our customers
              to understand what’s most important to them, and converting
              opportunities to materialized leads.<a href="#">read more...</a>
            </p>
          </Col>
          <Col className="p-3" md={6}>
            <img
              src="https://ecodercommunications.com/wp-content/uploads/2020/03/about-us.jpg"
              alt="about"
            />
          </Col>
        </Row>

        <div className="home-services my-5">
          <h2 className="text-center text-orange">Our Services</h2>
          <Row>
            <HomeServices
              title="Inbound / Outbound"
              details="Ecoder Communications BPO inbound & outbound solution enables
            companies to maximize customer experience."
              imglink="https://ecodercommunications.com/wp-content/uploads/2020/03/inbound-outbound.jpg"
            />
            <HomeServices
              title="Customer Support"
              details="Ecoder Communications After all everyone need a best support to handle there customers"
              imglink="https://ecodercommunications.com/wp-content/uploads/2020/03/customer_service.jpg"
            />
            <HomeServices
              title="Lead Generation"
              details="We generate highly qualified leads and set appointments with sales by making skilled calls for each"
              imglink="https://ecodercommunications.com/wp-content/uploads/2020/03/Lead-Generation.png"
            />
            <HomeServices
              title="Campaign Outsourcing"
              details="In Ecoder Communications We recognize that every customer is unique, with their own individual needs"
              imglink="https://ecodercommunications.com/wp-content/uploads/2020/03/campaign-outsourcing.png"
            />
          </Row>
        </div>
      </Container>

      <Container fluid>
        <Row className="counter">
          <CountItem title="Working Hours" count={(36, 758)}>
            <AccessAlarmsIcon />
          </CountItem>
        </Row>
      </Container>
    </>
  );
}
export default Home;
