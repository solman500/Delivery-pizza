import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
const loginNameRef=useRef()
const   loginPasswordRef=useRef()


const submitHandler=e=>{
  e.preventDefault()
}
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form  className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required ref={loginNameRef}/>
                </div>

                <div className="form__group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>

                <div className="form__group">
                  <button type='submit' className="addTOCart__btn">Login</button>
                </div>
              </form>

              <Link to="/register">
                Already have an account?Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Login;
