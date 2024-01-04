import React from "react";
import { ListGroup, Row, Col, Container, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5 className="mt-1">Tasty Treat</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5>Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem
                className="border-0 ps-0"
                style={{ background: "#fde4e4" }}
              >
                <span>Friday - Tuesday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Wednesday - Thursday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delevery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone:+201146223301</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location:Qena</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email:ahmedsolliman28@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">NewsLetter</h5>
            <p>Subscribe to our newsletter to get the latest news.</p>

            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button>
                <i class="ri-send-plane-line"></i>
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6"></Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p>Follow:</p>
              <span>
                <Link to="">
                  <i class="ri-facebook-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i class="ri-linkedin-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i class="ri-twitter-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
          <div className="copy__right">
            <p style={{ color: "red", textAlign: "center" }}>
              © 2024 Tasty Treat. All rights reserved
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
