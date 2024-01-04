import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signUpNameRef = useRef();
  const signUpPasswordRef = useRef();
  const signUpEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    required
                    ref={signUpNameRef}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    ref={signUpEmailRef}
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    ref={signUpPasswordRef}
                  />
                </div>

                <div className="form__group">
                  <button type="submit" className="addTOCart__btn">
                    Sign Up
                  </button>
                </div>
              </form>

              <Link to="/login">Dont have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Register;
